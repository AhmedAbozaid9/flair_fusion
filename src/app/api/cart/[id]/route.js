import UserCart from "@models/userCart";
import { connectToDB } from "@utils/database";

export const GET = async (_, { params }) => {
  try {
    connectToDB();
    const cart = await UserCart.findOne({ client: params.id });
    return new Response(JSON.stringify(cart.cartItems), { status: 200 });
  } catch (e) {
    return new Response("Failed to get the items", { status: 500 });
  }
};

export const POST = async (request, { params }) => {
  const { productId } = await request.json();
  try {
    connectToDB();
    const existingCart = await UserCart.findOne({ client: params.id });
    const cartItem = existingCart.cartItems.find(
      (item) => item.productId === productId
    );
    if (cartItem) {
      console.log(cartItem);
      cartItem.count = cartItem.count + 1;
    } else {
      existingCart.cartItems.push({ productId, count: 1 });
    }

    existingCart.markModified("cartItems");
    await existingCart.save();

    return new Response(JSON.stringify(existingCart), { status: 201 });
  } catch (e) {
    return new Response("Failed to add items to the cart", { status: 500 });
  }
};
