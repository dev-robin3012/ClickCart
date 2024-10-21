import Input from "@/components/input";
import Button from "@/components/ui/button";
import {
  UpdateUserType,
  useUpdateUserMutation,
} from "@/framework/basic-rest/customer/use-update-customer";
import { fadeInTop } from "@/utils/motion/fade-in-top";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const defaultValues = {};

const AccountDetails: React.FC = () => {
  const { mutate: updateUser, isLoading } = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserType>({
    defaultValues,
  });

  function onSubmit(input: UpdateUserType) {
    updateUser(input);
  }

  return (
    <motion.div
      layout
      initial="from"
      animate="to"
      exit="from"
      //@ts-ignore
      variants={fadeInTop(0.35)}
      className={`w-full flex flex-col`}
    >
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        Account Details
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center "
        noValidate
      >
        <div className="flex flex-col space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
            <Input
              labelKey="First Name"
              {...register("firstName", {
                required: "first name is required",
              })}
              variant="solid"
              className="w-full sm:w-1/2"
              errorKey={errors.firstName?.message}
            />
            <Input
              labelKey="Last Name"
              {...register("lastName", {
                required: "last name is required",
              })}
              variant="solid"
              className="w-full sm:w-1/2"
              errorKey={errors.lastName?.message}
            />
          </div>
          <Input
            labelKey="Address"
            {...register("address", {
              required: "Address is required",
            })}
            variant="solid"
            errorKey={errors.address?.message}
          />
          <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
            <Input
              type="tel"
              labelKey="Phone"
              {...register("phoneNumber", {
                required: "Phone is required",
              })}
              variant="solid"
              className="w-full sm:w-1/2"
              errorKey={errors.phoneNumber?.message}
            />
            <Input
              type="email"
              labelKey="Email *"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "forms:email-error",
                },
              })}
              variant="solid"
              className="w-full sm:w-1/2"
              errorKey={errors.email?.message}
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
            <Input
              type="tel"
              labelKey="City/Town"
              {...register("city", {
                required: "City is required",
              })}
              variant="solid"
              className="w-full sm:w-1/2"
              errorKey={errors.city?.message}
            />
            <Input
              type="email"
              labelKey="Postcode"
              {...register("postcode", {
                required: "postcode is required",
              })}
              variant="solid"
              className="w-full sm:w-1/2"
              errorKey={errors.postcode?.message}
            />
          </div>

          {/* <div className="relative flex flex-col">
            <span className="mt-2 text-sm text-heading font-semibold block pb-1">
              Gender
            </span>
            <div className="mt-2 flex items-center space-s-6">
              <RadioBox labelKey="Male" {...register("gender")} value="male" />
              <RadioBox
                labelKey="Female"
                {...register("gender")}
                value="female"
              />
            </div>
          </div> */}
          <div className="relative">
            <Button
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="h-12 mt-3 w-full sm:w-32"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default AccountDetails;
