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
  const { productId } = await request.json();
  try {
    connectToDB();
    const existingWishlist = await UserWishlist.findOne({ client: params.id });
    existingWishlist.wishlistItems.push(productId);

    existingWishlist.markModified("wishlistItems");
    await existingWishlist.save();

    return new Response(JSON.stringify(existingWishlist), { status: 201 });
  } catch (e) {
    return new Response("Failed to add items to the cart", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { productId } = await request.json();
  try {
    const existingWishlist = await UserWishlist.findOne({ client: params.id });

    existingWishlist.wishlistItems = existingWishlist.wishlistItems.filter(
      (product) => product !== productId
    );

    existingWishlist.markModified("wishlistItems");
    await existingWishlist.save();

    return new Response(JSON.stringify(existingWishlist), { status: 200 });
  } catch (e) {
    console.log(e);
    return new Response("Failed to delete the item", { status: 500 });
  }
};
