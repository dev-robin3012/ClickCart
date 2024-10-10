import motionProps from "@/components/common/drawer/motion";
import Scrollbar from "@/components/common/scrollbar";
import CartIcon from "@/components/icons/cart-icon";
import Link from "@/components/ui/link";
import useCart from "@/hooks/useCart";
import { fadeInOut } from "@/utils/motion/fade-in-out";
import cn from "classnames";
import { motion } from "framer-motion";
import Drawer from "rc-drawer";
import { FC } from "react";
import { IoClose } from "react-icons/io5";
import CartItem from "./cart-item";
import EmptyCart from "./empty-cart";

const Cart: FC = () => {
  const { cart, hideCart, showCart, cartItems } = useCart();

  const dir: string = "ltr";
  const contentWrapperCSS = dir === "ltr" ? { right: 0 } : { left: 0 };

  const cartPrice = cartItems.reduce(
    (acc: number, curr: any) => {
      return Number(curr.price) * curr.qty + Number(acc);
    },
    [0]
  );

  return (
    <>
      <button
        className="flex items-center justify-center h-auto relative focus:outline-none transform"
        onClick={showCart}
        aria-label="cart-button"
      >
        <CartIcon />
        <span className="cart-counter-badge flex items-center justify-center bg-heading text-white absolute -top-2.5 xl:-top-3 -right-3 -end-2.5 xl:-end-3 rounded-full font-bold">
          {cartItems.length}
        </span>
      </button>

      <Drawer
        open={cart}
        placement={dir === "rtl" ? "left" : "right"}
        onClose={hideCart}
        contentWrapperStyle={contentWrapperCSS}
        {...motionProps}
      >
        <div className="flex flex-col w-full h-full justify-between">
          <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 py-0.5 border-b border-gray-100">
            <h2 className="font-bold text-xl md:text-2xl m-0 text-heading">
              Shopping Cart
            </h2>
            <button
              className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-6 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
              onClick={hideCart}
              aria-label="close"
            >
              <IoClose className="text-black mt-1 md:mt-0.5" />
            </button>
          </div>
          {cartItems.length ? (
            <CartItems />
          ) : (
            <motion.div
              layout
              initial="from"
              animate="to"
              exit="from"
              variants={fadeInOut(0.25)}
              className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center"
            >
              <EmptyCart />
              <h3 className="text-lg text-heading font-bold pt-8">
                Empty Cart
              </h3>
            </motion.div>
          )}

          <div
            className="flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7"
            onClick={hideCart}
          >
            <Link
              href={"/checkout"}
              className={cn(
                "w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600",
                {
                  "cursor-not-allowed bg-gray-400 hover:bg-gray-400":
                    !cartItems.length,
                }
              )}
            >
              <span className="w-full pe-5 -mt-0.5 py-0.5">
                Proceed To Checkout
              </span>
              <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
                <span className="border-s border-white pe-5 py-0.5" />
                {cartPrice}
              </span>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

const CartItems = () => {
  const { cartItems } = useCart();
  // const products = cartItems.map((item: any) => item.product);

  // const { data } = useQuery<Product[], Error>(["cart-products"], () =>
  //   http.get(`products?include=${products}`).then(({ data }) => data)
  // );

  return (
    <Scrollbar className="cart-scrollbar w-full flex-grow">
      <div className="w-full px-5 md:px-7">
        {cartItems?.map((item: any) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </Scrollbar>
  );
};

export default Cart;
