const { readFile } = require("fs");

readFile("data.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  try {
    const products = JSON.parse(data);
    //get only the unique items
    const uniqueProducts = Array.from(
      new Set(products.map((product) => product[0].desc)),
    ).map((desc) => {
      return products.find((item) => item[0].desc === desc);
    });

    console.log(uniqueProducts, uniqueProducts.length);
  } catch (err) {
    console.log(err);
  }
});
