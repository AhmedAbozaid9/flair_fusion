// import { Schema, model, models } from "mongoose";
const { Schema, model, models } = require("mongoose");
const ProductSchema = new Schema({
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  type: {
    type: String,
    required: [true, "Type is required."],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["male", "female"],
  },
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  desc: {
    type: String,
    required: [true, "Description is required."],
  },
  price: {
    type: String,
    required: [true, "Price is required."],
  },
  images: {
    type: Array,
    required: [true, "Images is required."],
  },
});

const Product = models.Product || model("Product", ProductSchema);
export default Product;
