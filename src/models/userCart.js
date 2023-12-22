import { Schema, model, models } from "mongoose";

const UserCartSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  cartItems: {
    type: Array,
    required: [true, "Prompt is required."],
  },
});

const UserCart = models.UserCart || model("UserCart", UserCartSchema);
export default UserCart;
