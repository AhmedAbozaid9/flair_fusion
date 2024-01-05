import { connectToDB } from "@utils/database";
import Product from "@models/product";
import { URLSearchParams } from "url";

const itemsPerPage = 20;

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);

  const searchTerm = searchParams.get("searchTerm");
  const category = searchParams.get("category") || "";

  console.log(category);

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
        {
          category,
          $or: [
            { title: { $regex: regexPart } },
            { type: { $regex: regexCaseInsenstive } },
            { gender: { $regex: regexCaseInsenstive } },
          ],
        },
        {
          category: "",
        },
      ],
    }).countDocuments();

    const products = await Product.find({
      $or: [
        {
          category,
          $or: [
            { title: { $regex: regexPart } },
            { type: { $regex: regexCaseInsenstive } },
            { gender: { $regex: regexCaseInsenstive } },
          ],
        },
        {
          category: "",
        },
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
