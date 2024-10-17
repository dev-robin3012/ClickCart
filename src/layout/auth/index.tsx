import Subscription from "@/components/common/subscription";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { type FC, type PropsWithChildren } from "react";
import { ImFacebook2, ImGoogle2 } from "react-icons/im";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname, query } = useRouter();

  return (
    <>
      <div className="overflow-hidden my-16 lg:my-20 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8">
        <div className="text-center mb-6 pt-2.5">
          <Logo />
        </div>

        {children}

        <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
          <hr className="w-full border-gray-300" />
          <span className="absolute -top-2.5 px-2 bg-white">Or</span>
        </div>
        <Button
          // loading={loading}
          //   disabled={loading}
          className="h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"
          // onClick={handelSocialLogin}
        >
          <ImFacebook2 className="text-sm sm:text-base me-1.5" />
          Login With Facebook
        </Button>

        <Button
          // loading={loading}
          //   disabled={loading}
          className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
          onClick={() =>
            signIn("google", {
              callbackUrl: (query.callbackUrl as string) || "/",
            })
          }
        >
          <ImGoogle2 className="text-sm sm:text-base me-1.5" />
          Login With Google
        </Button>

        <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
          {pathname === "/signin" ? (
            <>
              {`Don't have any account?`}{" "}
              <Link
                href="/signup"
                className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {`Already have account?`}{" "}
              <Link
                href="/signin"
                className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
              >
                Signin
              </Link>
            </>
          )}
        </div>
      </div>
      <Subscription />
    </>
  );
};

export default AuthLayout;
