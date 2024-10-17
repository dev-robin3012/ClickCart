import { connectDB } from "@/DB/connection";
import User from "@/DB/models/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const { NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_SECRET } = process.env;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        id: { label: "id", type: "string" },
        firstName: { label: "Name", type: "text" },
        lastName: { label: "Name", type: "text" },
        email: { label: "Email", type: "email" },
      },
      authorize: async (credentials) => {
        return credentials;
      },
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_SECRET as string,
    }),
  ],
  secret: NEXTAUTH_SECRET,
  pages: { signIn: "/signin" },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      try {
        if (account?.provider === "google") {
          await connectDB();
          const userInDB = await User.findOne({ email: user.email });
          if (!userInDB) {
            await User.create({
              firstName: profile.given_name,
              lastName: profile.family_name,
              email: profile.email,
              image: profile.picture,
              password: "passwordless",
            });
          }
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
