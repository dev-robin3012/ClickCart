import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "@/components/ui/link";
import Logo from "@/components/ui/logo";
import PasswordInput from "@/components/ui/password-input";
import { SignUpInputType } from "@/framework/basic-rest/auth/use-signup";
import useAuth from "@/hooks/useAuth";
import { ROUTES } from "@/utils/routes";
import { useForm } from "react-hook-form";
import { ImFacebook2, ImGoogle2 } from "react-icons/im";

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputType>();

  const { registration, loading } = useAuth();

  function onSubmit(payload: SignUpInputType) {
    registration(payload);
  }

  return (
    <div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
      <div className="text-center mb-6 pt-2.5">
        <div>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          By signing up, you agree to our
          <Link
            href={ROUTES.TERMS}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            terms
          </Link>{" "}
          &amp;{" "}
          <Link
            href={ROUTES.POLICY}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            policy
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-4">
          <Input
            labelKey="First Name"
            type="text"
            variant="solid"
            {...register("first_name", {
              required: "forms:first-name-required",
            })}
            errorKey={errors.first_name?.message}
          />
          <Input
            labelKey="Last Name"
            type="text"
            variant="solid"
            {...register("last_name")}
          />
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
          <div className="relative">
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              className="h-11 md:h-12 w-full mt-2"
            >
              Register
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">Or</span>
      </div>

      <Button
        type="submit"
        // loading={loading}
        disabled={loading}
        className="h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"
      >
        <ImFacebook2 className="text-sm sm:text-base me-1.5" />
        Login With Facebook
      </Button>
      <Button
        type="submit"
        // loading={isLoading}
        disabled={loading}
        className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
      >
        <ImGoogle2 className="text-sm sm:text-base me-1.5" />
        Login With Google
      </Button>
      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        Already have an account?{" "}
        <Link href="signin">
          <button
            type="button"
            className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
