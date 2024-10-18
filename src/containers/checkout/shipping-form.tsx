import Input from "@/components/ui/input";
import { FC } from "react";

interface Props {
  formState: any;
}

const ShippingForm: FC<Props> = ({ formState }) => {
  return (
    <div>
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        Shipping Address
      </h2>

      <div className="flex flex-col space-y-4 lg:space-y-5">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
          <Input
            labelKey="First Name"
            name="first_name"
            variant="solid"
            {...formState("shipping.first_name", {
              value: "Shadu",
            })}
            className="w-full lg:w-1/2 "
          />
          <Input
            labelKey="Last Name"
            name="last_name"
            variant="solid"
            {...formState("shipping.last_name", {
              value: "Robin",
            })}
            className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
          />
        </div>

        <Input
          labelKey="Address"
          name="address_1"
          {...formState("shipping.address_1", {
            value: "Mirpur",
          })}
          variant="solid"
        />

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
          <Input
            labelKey="Phone"
            {...formState("shipping.phone", {
              value: "+8801238763",
            })}
            variant="solid"
            className="w-full lg:w-1/2 "
          />
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
          <Input
            labelKey="City"
            {...formState("shipping.city", {
              value: "Dhaka",
            })}
            variant="solid"
            className="w-full lg:w-1/2 "
          />

          <Input
            labelKey="Postcode"
            {...formState("shipping.postcode", {
              value: "1216",
            })}
            variant="solid"
            className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
