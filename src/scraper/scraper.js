// This is a file that is intended to run only once, to gather the data from multiple sources, then save it to a
// json file which will be then saved to a mongo DB database. This is not ethical, and I'm doing it just for a
// personal project, so please don't use it for anything other than personal projects

//This code will run on various fashion stores, and for each store, it will get data based on their type, gender, and more
const puppeteer = require("puppeteer");

const run = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(
    "https://eg.hm.com/en/buy-rib-knit-bodycon-dress-dark-blue.html",
  );

  await page.waitForSelector("h1");
  await page.waitForSelector(".description-first");
  await page.waitForSelector(".pdp-image-zoom-wrapper img", { visible: true });

  let data = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    const desc = document.querySelector(".description-first");
    let imagesEls = Array.from(
      document.querySelectorAll(".pdp-image-zoom-wrapper img"),
    );
    const images = [];
    imagesEls.forEach((img) => images.push(img.src));
    return { title: h1.innerText, desc: desc.innerText, images };
  });

  console.log(data);
  await browser.close();
};

run();
