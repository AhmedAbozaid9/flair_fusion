import { connectToDB } from "@utils/database";
import Product from "@models/product";
import { URLSearchParams } from "url";

const itemsPerPage = 20;
const END_POINTS = ["hot", "trending", "new"];

export const GET = async (req, { params }) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  const page = parseInt(searchParams.get("page")) || 1;
  const searchType = params.products;
  const type = END_POINTS.includes(searchType) ? searchType : "";

  try {
    await connectToDB();
    const startIndex = (page - 1) * itemsPerPage;
    const productsCount = (await Product.find(type ? { type } : {})).length;
    console.log(params);

    const products = await Product.find(type ? { type } : {})
      .skip(startIndex)
      .limit(itemsPerPage);

    return new Response(JSON.stringify({ products, productsCount }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};
