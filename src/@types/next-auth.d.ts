import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      name?: string;
      firstName: string;
      lastName: string;
      email: string;
      picture?: string;
      image: string;
      sub?: string;
      jti?: string;
      role: "admin" | "customer";
    };
    accessToken: string;
  }

  interface Profile {
    id: string;
    firstName: string;
    lastName: string;
    given_name: string;
    family_name: string;
    email: string;
    image: string;
    picture: string;
  }

  interface Credentials {
    accessToken: string;
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
  }
}
