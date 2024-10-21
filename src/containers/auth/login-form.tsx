import Input from "@/components/input";
import Button from "@/components/ui/button";
import PasswordInput from "@/components/ui/password-input";
import { LoginInputType } from "@/framework/basic-rest/auth/use-login";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { callbackUrl } = useRouter().query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>();

  const handleLogin = async (payload: LoginInputType) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/auth/signin`, payload);

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
        Login with your email & password
      </p>

      <form
        onSubmit={handleSubmit(handleLogin)}
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
    </>
  );
};

export default LoginForm;
