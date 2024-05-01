import { connectToDB } from "@utils/database";
import Product from "@models/product";
import { URLSearchParams } from "url";

const itemsPerPage = 20;

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  const searchTerm = searchParams.get("searchTerm");
  const category = searchParams.get("category") || "";

  const page = parseInt(searchParams.get("page")) || 1;

  const regexCaseInsenstive = new RegExp(`^${searchTerm}$`, "i");
  const regexPart = new RegExp(
    `\\b(?:${searchTerm}|.*${searchTerm}.*)\\b`,
    "i"
  );

  const getQuery = () => {
    if (category)
      return {
        $and: [
          { category: { $regex: new RegExp(`^${category}$`, "i") } },
          {
            $or: [
              { title: { $regex: regexPart } },
              { type: { $regex: regexCaseInsenstive } },
              { gender: { $regex: regexCaseInsenstive } },
              { desc: { $regex: regexPart } },
            ],
          },
        ],
      };
    return {
      $or: [
        { title: { $regex: regexPart } },
        { type: { $regex: regexCaseInsenstive } },
        { gender: { $regex: regexCaseInsenstive } },
        { desc: { $regex: regexPart } },
      ],
    };
  };

  try {
    await connectToDB();
    const startIndex = (page - 1) * itemsPerPage;
    const productsCount = await Product.find(getQuery()).countDocuments();

    const products = await Product.find(getQuery())
      .skip(startIndex)
      .limit(itemsPerPage);
    return new Response(JSON.stringify({ products, productsCount }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};
