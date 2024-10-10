import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import useAuth from "src/hooks/useAuth";
import BillingForm from "./billing-form";
import ShippingForm from "./shipping-form";
import TextArea from "@components/ui/text-area";
import CheckBox from "@components/ui/checkbox";
import woo_client from "@api/woo-client";
import { toast } from "react-toastify";
import useCart from "@hooks/useCart";
import { useState } from "react";
import Container from "@components/ui/container";
import OrderInformation from "@components/order/order-information";
import CheckoutCard from "./checkout-card";

interface CheckoutInputType {
  billing: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address_1: string;
    city: string;
    postcode: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    address_1: string;
    city: string;
    postcode: string;
  };
  save: boolean;
  note: string;
}

const CheckoutForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);

  const { credentials } = useAuth();

  const { register, handleSubmit } = useForm<CheckoutInputType>();

  const { cartItems, clearCart } = useCart();

  const handlePlaceOrder = async ({ save, note, ...rest }: any) => {
    setLoading(true);
    try {
      save && (await woo_client.put(`customers/${credentials.id}`, rest));

      const items = cartItems.map((item: any) => ({
        product_id: item.parentID,
        variation_id: item.id,
        quantity: item.qty,
      }));

      const { data } = await woo_client.post("orders", {
        ...rest,
        line_items: items,
      });

      note && (await woo_client.post(`orders/${data.id}/notes`, { note }));
      clearCart();
      setOrder(data);
      toast.success("Order placed successfully.");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("order place failed");
    }
  };

  return (
    <>
      {order ? (
        <Container>
          <OrderInformation order={order} />
        </Container>
      ) : (
        <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
          <div className="md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5">
            <form
              onSubmit={handleSubmit(handlePlaceOrder)}
              className="w-full mx-auto flex flex-col justify-center gap-10"
              noValidate
            >
              <BillingForm formState={register} />
              <ShippingForm formState={register} />

              <div className="relative flex items-center ">
                <CheckBox labelKey="Save Information" {...register("save")} />
              </div>

              <TextArea
                labelKey="Notes"
                {...register("note")}
                placeholderKey="Order Notes"
                className="relative pt-3 xl:pt-6"
              />

              <div className="flex w-full">
                <Button
                  className="w-full sm:w-auto"
                  loading={loading}
                  disabled={loading}
                >
                  Place Order
                </Button>
              </div>
            </form>
          </div>
          <div className="md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5">
            <CheckoutCard />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
