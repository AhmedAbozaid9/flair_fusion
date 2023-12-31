import { Schema, model, models } from "mongoose";

const UserCartSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  cartItems: {
    type: Array,
  },
});

const UserCart = models.UserCart || model("UserCart", UserCartSchema);
export default UserCart;
