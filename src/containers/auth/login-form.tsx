import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Logo from "@/components/ui/logo";
import PasswordInput from "@/components/ui/password-input";
import { LoginInputType } from "@/framework/basic-rest/auth/use-login";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ImFacebook2, ImGoogle2 } from "react-icons/im";

const LoginForm: React.FC = () => {
  const { login, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>();

  function handelSocialLogin() {
    return;
  }

  return (
    <div className="overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8">
      <div className="text-center mb-6 pt-2.5">
        <Logo />
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          Login with your email & password
        </p>
      </div>
      <form
        onSubmit={handleSubmit(login)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-3.5">
          <Input
            labelKey="Email"
            type="email"
            variant="solid"
            {...register("email", {
              required: `Email is required`,
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please provide valid email address",
              },
            })}
            errorKey={errors.email?.message}
          />
          <PasswordInput
            labelKey="Password"
            errorKey={errors.password?.message}
            {...register("password", {
              required: `Password is required`,
            })}
          />
          <div className="flex items-center justify-center">
            <div className="flex items-center flex-shrink-0">
              <label className="switch relative inline-block w-10 cursor-pointer">
                <input
                  id="remember"
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  {...register("remember_me")}
                />
                <span className="bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round"></span>
              </label>
              <label
                htmlFor="remember"
                className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <div className="flex ms-auto">
              <button
                type="button"
                // onClick={() => openModal("FORGET_PASSWORD")}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <div className="relative">
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              className="h-11 md:h-12 w-full mt-1.5"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">Or</span>
      </div>
      <Button
        // loading={loading}
        disabled={loading}
        className="h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"
        onClick={handelSocialLogin}
      >
        <ImFacebook2 className="text-sm sm:text-base me-1.5" />
        Login With Facebook
      </Button>
      <Button
        // loading={loading}
        disabled={loading}
        className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
        onClick={handelSocialLogin}
      >
        <ImGoogle2 className="text-sm sm:text-base me-1.5" />
        Login With Google
      </Button>
      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        {`Don't have any account?`}{" "}
        <Link href="/signup">
          <button
            type="button"
            className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
