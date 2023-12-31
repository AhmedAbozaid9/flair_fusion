import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";
import User from "@models/user";
import UserCart from "@models/userCart";
import UserWishlist from "@models/userWishlist";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env["GOOGLE_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
    }),
  ],
  secret: process.env["NEXTAUTH_SECRET"],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        // check if a user already exists
        const userExists = await User.findOne({ email: profile.email });
        //create a new user if not
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          }).then((createdUser) => {
            //create a cart and a wishlist for the user
            UserCart.create({
              client: createdUser._id,
              cartItems: [],
            })
            UserWishlist.create({
              client: createdUser._id,
              wishlistItems: [],
            });
          });
        }
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
