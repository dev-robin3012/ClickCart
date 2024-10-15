import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const { NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_SECRET } = process.env;

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (_, req) => {
        // TODO: Authenticate the credentials

        return {
          id: "37483",
          name: "Robin",
          email: "robin@gmail.com",
          image: "https://example.com/image.jpg",
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
};

export default NextAuth(authOptions);
