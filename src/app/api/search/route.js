import { connectToDB } from "@utils/database";
import Product from "@models/product";
import { URLSearchParams } from "url";

const itemsPerPage = 20;

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  const searchTerm = searchParams.get("searchTerm");

  console.log(searchParams);

  const page = parseInt(searchParams.get("page")) || 1;

  const regexCaseInsenstive = new RegExp(`^${searchTerm}$`, "i");
  const regexPart = new RegExp(
    `\\b(?:${searchTerm}|.*${searchTerm}.*)\\b`,
    "i"
  );

  try {
    await connectToDB();
    const startIndex = (page - 1) * itemsPerPage;
    const productsCount = await Product.find({
      $or: [
        { title: { $regex: regexPart } },
        { type: { $regex: regexCaseInsenstive } },
        { category: { $regex: regexPart } },
        { gender: { $regex: regexCaseInsenstive } },
      ],
    }).countDocuments();

    const products = await Product.find({
      $or: [
        { title: { $regex: regexPart } },
        { type: { $regex: regexCaseInsenstive } },
        { category: { $regex: regexPart } },
        { gender: { $regex: regexCaseInsenstive } },
      ],
    })
      .skip(startIndex)
      .limit(itemsPerPage);

    return new Response(JSON.stringify({ products, productsCount }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};
