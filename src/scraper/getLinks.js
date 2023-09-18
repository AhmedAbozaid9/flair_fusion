const puppeteer = require("puppeteer");
const { writeFile, readFile } = require("fs");
const { Searches } = require("./searchLinks");
require("events").EventEmitter.defaultMaxListeners = 30;

const getLinks = async (BaseURL, category, type, gender) => {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(120000);
    await page.goto(BaseURL);

    await page.waitForSelector(".product-selected-url", { visible: true });
    console.log("getting the links : . . . ");

    let links = await page.evaluate(() => {
      let links = Array.from(
        document.querySelectorAll(".product-selected-url"),
      );
      links = links.map((link) => link.href);

      return { links: [...new Set(links)] };
    });

    await browser.close();
    console.log("got it");
    readFile("links.json", "utf-8", (err, prevData) => {
      if (err) {
        console.log(err);
        return;
      }
      try {
        const existingLinks = JSON.parse(prevData);
        existingLinks.push({ category, type, links, gender });
        writeFile("links.json", JSON.stringify(existingLinks), (e) => {
          if (e) console.log(e);
          console.log("saved the links");
        });
      } catch (err) {
        console.log(err);
      }
    });
  } catch (e) {
    console.log(e);
  }
};

Searches.forEach(({ link, category, type, gender }) => {
  getLinks(link, category, type, gender);
});
