import { connectToDB } from "@utils/database";
import Product from "@models/product";

export const GET = async (request, { params }) => {
  const productId = params.id;
  console.log(productId);

  try {
    await connectToDB();
    const product = await Product.findById(productId);

    return new Response(JSON.stringify(product), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
};
