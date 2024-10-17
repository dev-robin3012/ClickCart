import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "@/components/ui/link";
import PasswordInput from "@/components/ui/password-input";
import { SignUpInputType } from "@/framework/basic-rest/auth/use-signup";
import { ROUTES } from "@/utils/routes";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignUpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { callbackUrl } = useRouter().query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputType>();

  const onSubmit = async (payload: SignUpInputType) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/auth/signup`, payload);
      await signIn("credentials", {
        ...data,
        callbackUrl: (callbackUrl as string) || "/",
      });
    } catch (error: any) {
      toast.error(error.response.data.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            {...register("firstName", {
              required: "forms:first-name-required",
            })}
            errorKey={errors.firstName?.message}
          />
          <Input
            labelKey="Last Name"
            type="text"
            variant="solid"
            {...register("lastName")}
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
    </>
  );
};

export default SignUpForm;
