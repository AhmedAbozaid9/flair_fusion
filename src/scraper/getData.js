// This is a file that is intended to run only once, to gather the data from multiple sources, then save it to a
// json file which will be then saved to a mongo DB database. This is not ethical, and I'm doing it just for a
// personal project, so please don't use it for anything other than personal projects

//This code will run on various fashion stores, and for each store, it will get data based on their type, gender, and more
const puppeteer = require("puppeteer");
const { readFile, writeFile } = require("fs");
require("events").EventEmitter.defaultMaxListeners = 30;

const getProductDataHM = async (links, category, type, gender) => {
  const data = [];
  for (const link of links) {
    const idx = links.indexOf(link);
    const browser = await puppeteer.launch({
      headless: "true",
      maxConcurrency: 5,
      timeout: 0,
    });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(1200000);
    await page.goto(link);

    await page.waitForSelector("h1", { timeout: 60000 });
    await page.waitForSelector(".description-first", { timeout: 60000 });
    await page.waitForSelector(".price-amount", { timeout: 60000 });
    await page.waitForSelector(".pdp-image-zoom-wrapper img", {
      timeout: 60000,
      visible: true,
    });

    let item = await page.evaluate(() => {
      const h1 = document.querySelector("h1");
      const desc = document.querySelector(".description-first");
      const price = document.querySelector(".price-amount");
      let imagesEls = Array.from(
        document.querySelectorAll(".pdp-image-zoom-wrapper img"),
      );
      const images = [];
      imagesEls.forEach((img) => images.push(img.src));
      return {
        title: h1.innerText,
        desc: desc.innerText,
        price: price.innerText,
        images,
      };
    });
    data.push({ category, type, gender, ...item });
    console.log(category, type, idx);
    await browser.close();
    readFile("data.json", "utf-8", (err, prevData) => {
      if (err) {
        console.log(err);
        return;
      }
      try {
        const existingData = JSON.parse(prevData);
        existingData.push(data);
        writeFile("data.json", JSON.stringify(existingData), (e) => {
          if (e) console.log(e);
          console.log("saved the data");
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
};

//get the links
readFile("links.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  try {
    const links = JSON.parse(data);
    links.forEach(({ category, type, gender, links }) => {
      getProductDataHM(links.links, category, type, gender);
    });
  } catch (err) {
    console.log(err);
  }
});
