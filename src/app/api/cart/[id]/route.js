import UserCart from "@models/userCart";
import Product from "@models/product";
import { connectToDB } from "@utils/database";

export const GET = async (_, { params }) => {
  try {
    connectToDB();
    const cart = await UserCart.findOne({ client: params.id });
    const products = await Promise.all(
      cart.cartItems.map(async (item) => {
        const product = await Product.findById(item.productId);

        return { product, quantity: item.count };
      })
    );
    return new Response(JSON.stringify(products), { status: 200 });
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

export const DELETE = async (request, { params }) => {
  const { productId, deleteQuantity } = await request.json();
  const amount = deleteQuantity || 1;
  try {
    let existingCart = await UserCart.findOne({ client: params.id });

    const cartItem = existingCart.cartItems.find(
      (item) => item.productId === productId
    );
    cartItem.count = cartItem.count - amount;
    if (cartItem.count < 1) {
      existingCart.cartItems = existingCart.cartItems.filter(
        (product) => product.productId !== productId
      );
    }
    existingCart.markModified("cartItems");
    await existingCart.save();

    return new Response(JSON.stringify(existingCart), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to delete the item", { status: 500 });
  }
};
