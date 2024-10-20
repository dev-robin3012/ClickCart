import Input from "@/components/input";
import { FC } from "react";

interface Props {
  formState: any;
}

const BillingForm: FC<Props> = ({ formState }) => {
  return (
    <div>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        Billing Information
      </h2>

      <div className="flex flex-col space-y-4 lg:space-y-5">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
          <Input
            labelKey="First Name*"
            variant="solid"
            className="w-full lg:w-1/2"
            {...formState("billing.first_name", {
              value: "Shahadat",
            })}
          />
          <Input
            labelKey="Last Name*"
            variant="solid"
            className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
            {...formState("billing.last_name", {
              value: "Robin",
            })}
          />
        </div>
        <Input
          labelKey="Address"
          variant="solid"
          {...formState("billing.address_1", { value: "Mirpur" })}
        />
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
          <Input
            labelKey="Phone"
            {...formState("billing.phone", { value: "+88013762537" })}
            variant="solid"
            className="w-full lg:w-1/2 "
          />

          <Input
            type="email"
            labelKey="Email *"
            {...formState("billing.email", {
              required: "email is required",
              value: "robin@lh.com",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please provide valid email address",
              },
            })}
            variant="solid"
            className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
          />
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
          <Input
            labelKey="City"
            {...formState("billing.city", { value: "Dhaka" })}
            variant="solid"
            className="w-full lg:w-1/2 "
          />

          <Input
            labelKey="Postcode"
            {...formState("billing.postcode", { value: "1216" })}
            name="postcode"
            variant="solid"
            className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
