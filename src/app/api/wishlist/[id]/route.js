import UserWishlist from "@models/userWishlist";
import { connectToDB } from "@utils/database";

export const GET = async (_, { params }) => {
  try {
    connectToDB();
    const wishlist = await UserWishlist.findOne({ client: params.id });
    return new Response(JSON.stringify(wishlist.wishlistItems), {
      status: 200,
    });
  } catch (e) {
    return new Response("Failed to get the items", { status: 500 });
  }
};

export const POST = async (request, { params }) => {
  const { product } = await request.json();
  try {
    connectToDB();
    const existingWishlist = await UserWishlist.findOne({ client: params.id });
    existingWishlist.wishlistItems.push(product);

    existingWishlist.markModified("wishlistItems");
    await existingWishlist.save();

    return new Response(JSON.stringify(existingWishlist), { status: 201 });
  } catch (e) {
    return new Response("Failed to add items to the cart", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { productId, deleteQuantity } = await request.json();
  console.log(productId, deleteQuantity);
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
