import { Schema, model, models } from "mongoose";

const UserWishlistSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  wishlistItems: {
    type: Array,
  },
});

const UserWishlist =
  models.UserWishlist || model("UserWishlist", UserWishlistSchema);
export default UserWishlist;
