import { connectDB } from "@/DB/connection";
import User from "@/DB/models/user";
import tokenGenerator from "@/utils/token-generator";
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
        test: { label: "Test", type: "email" },
      },
      authorize: async (credentials) => {
        return {
          id: credentials?.id as string,
          email: credentials?.email as string,
        };
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
    signIn: async ({ account, profile, credentials }) => {
      console.log({ account });

      try {
        if (account?.provider === "google") {
          await connectDB();
          let userInDB = await User.findOne({ email: profile?.email });

          if (!userInDB) {
            userInDB = await User.create({
              firstName: profile?.given_name,
              lastName: profile?.family_name,
              email: profile?.email,
              image: profile?.picture,
            });
          }
          const { accessToken, refreshToken } = tokenGenerator(userInDB.email);
          await User.findByIdAndUpdate(userInDB._id, { refreshToken });

          const response = userInDB.toObject();

          account.accessToken = accessToken;
          account.id = response._id + "";
          account.firstName = response.firstName;
          account.lastName = response.lastName;
          account.email = response.email;
          account.image = response.image || "";
        } else if (account?.provider === "credentials" && !!credentials) {
          account.accessToken = credentials.accessToken;
          account.id = credentials._id + "";
          account.firstName = credentials.firstName;
          account.lastName = credentials.lastName;
          account.email = credentials.email;
          account.image = credentials.image || "";
        }

        return true;
      } catch (error) {
        return false;
      }
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.accessToken || "";
        token.id = account.id || "";
        token.firstName = account.firstName || "";
        token.lastName = account.lastName || "";
        token.image = account.image || "";
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      delete session.user.name;
      delete session.user.picture;
      delete session.user.sub;
      delete session.user.jti;

      return session;
    },
  },
};

export default NextAuth(authOptions);
