// This is a file that is intended to run only once, to gather the data from multiple sources, then save it to a
// json file which will be then saved to a mongo DB database. This is not ethical, and I'm doing it just for a
// personal project, so please don't use it for anything other than personal projects

//This code will run on various fashion stores, and for each store, it will get data based on their type, gender, and more
const puppeteer = require("puppeteer");
const { readFile, writeFile } = require("fs");
require("events").EventEmitter.defaultMaxListeners = 30;

const { Searches } = require("./searchLinks");

let counter = 1;

const getProductDataHM = async (link, category, type, gender) => {
  const browser = await puppeteer.launch({
    headless: "true",
    maxConcurrency: 5,
    timeout: 0,
    protocolTimeout: 0,
  });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(link, { waitUntil: "networkidle2", timeout: 0 });
  // now we're on products page, we want to enter the website of each product, take the data, then go back
  //the links
  await page.waitForSelector(".product-selected-url", { timeout: 0 });

  const productsLinks = await page.evaluate(() => {
    let links = Array.from(
      document.querySelectorAll(".product-selected-url"),
    ).map((link) => link.href);
    return [...new Set(links)];
  });
  for (const productLink of productsLinks) {
    let retries = 5;
    while (retries > 0) {
      try {
        await page.goto(productLink, {
          waitUntil: "networkidle2",
          timeout: 0,
        });
        break; // Break out of loop if successful
      } catch (error) {
        console.error("Error:", error);
        retries--;
      }
    }

    await page.waitForSelector("h1", { timeout: 0 });
    await page.waitForSelector(".description-first", { timeout: 0 });
    await page.waitForSelector(".price-amount", { timeout: 0 });
    await page.waitForSelector(".pdp-image-zoom-wrapper img", {
      timeout: 0,
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
    const data = { category, type, gender, ...item };
    readFile("./data.json", "utf-8", (err, prevData) => {
      if (err) {
        console.log(err);
        return;
      }
      try {
        const existingData = JSON.parse(prevData);
        existingData.push(data);
        console.log(`saved ${counter++} data item`);
        writeFile("./data.json", JSON.stringify(existingData), (e) => {
          if (e) console.log(e);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
  await page.close();
};

try {
  Searches.forEach(({ category, type, gender, link }) => {
    getProductDataHM(link, category, type, gender).then(() => {});
  });
} catch (err) {
  console.log(err);
}

