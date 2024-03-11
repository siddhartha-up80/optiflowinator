import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import Google from "next-auth/providers/google";
import User from "./lib/models/User";
import { connectToDB } from "./lib/database";

const config = {
  providers: [Google],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile?.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            image: profile?.picture,
          });
        }

        return true;
      } catch (error: any) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
} satisfies NextAuthConfig;


export const {handlers, auth, signIn, signOut} = NextAuth(config)