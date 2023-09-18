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
      new Set(products.map((product) => product.images[0])),
    ).map((image) => {
      return products.find((item) => item.images[0] === image);
    });

    console.log(
      "Unique products: " + uniqueProducts.length,
      "All :" + products.length,
    );
  } catch (err) {
    console.log(err);
  }
});
