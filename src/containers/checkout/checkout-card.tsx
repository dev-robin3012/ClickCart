import { CheckoutItem } from "@containers/checkout/checkout-card-item";
import { CheckoutCardFooterItem } from "./checkout-card-footer-item";
import useCart from "src/hooks/useCart";
import { FC } from "react";

const CheckoutCard: FC = () => {
  const { cartItems } = useCart();
  // const [cart, setCart] = useState([]);

  // const products = cartItems.map((item: any) => item.product);

  const isEmpty = false;

  const subTotal = cartItems.reduce(
    (acc: number, curr: any) => {
      return Number(curr.price) * curr.qty + Number(acc);
    },
    [0]
  );

  const checkoutFooter = [
    {
      id: 1,
      name: "Subtotal",
      price: subTotal,
    },
    {
      id: 2,
      name: "Shipping",
      price: 70,
    },
    {
      id: 3,
      name: "Total",
      price: subTotal + 70,
    },
  ];

  // useEffect(() => {
  //   products.length &&
  //     http.get(`products?include=${products}`).then(({ data }) => {
  //       const res = cartItems.map((item: any) => {
  //         const res2 = data.find((p: Product) => p.id === item.product);
  //         return { ...item, product: res2 };
  //       });

  //       setCart(res);
  //     });
  // }, [products.length]);

  return (
    <div className="pt-12 md:pt-0 2xl:ps-4">
      <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
        Your Order
      </h2>
      <div className="flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
        <span>Product</span>
        <span className="ms-auto flex-shrink-0">Subtotal</span>
      </div>
      {!isEmpty ? (
        cartItems?.map((item: any, key: number) => (
          <CheckoutItem item={item} key={key} />
        ))
      ) : (
        <p className="text-red-500 lg:px-3 py-4">Your cart is empty.</p>
      )}
      {checkoutFooter.map((item: any) => (
        <CheckoutCardFooterItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CheckoutCard;
