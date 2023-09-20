import { connectToDB } from "@utils/database";
import Product from "@models/product";
import { URLSearchParams } from "url";

const itemsPerPage = 20;

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  const page = parseInt(searchParams.get("page")) || 1
  const type = searchParams.get("type")

  try {
    await connectToDB();
    const startIndex = (page - 1) * itemsPerPage;
    const products = await Product.find(type?{type}:{})
      .skip(startIndex)
      .limit(itemsPerPage);
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};
