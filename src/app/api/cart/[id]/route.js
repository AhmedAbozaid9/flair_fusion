import UserCart from "@models/userCart";
import { connectToDB } from "@utils/database";

export const GET = async (_, { params }) => {
  try {
    connectToDB();
    const cart = await UserCart.findById(params.id).populate("client");
    return new Response(JSON.stringify(cart), { status: 200 });
  } catch (e) {
    return new Response("Failed to get the items", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    connectToDB();
    const { newItem } = await request.json();
    const existingCart = await UserCart.findById(params.id).populate("client");

    return new Response(JSON.stringify(newItem), { status: 201 });
  } catch (e) {
    return new Response("Failed to create a new cart", { status: 500 });
  }
};
