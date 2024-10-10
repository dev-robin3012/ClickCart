import { CartContext } from "@/contexts/index";
import { useSsrCompatible } from "@/utils/use-ssr-compatible";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useWindowSize } from "react-use";

const useCart = () => {
  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
  // @ts-ignore
  const { cart, setCart } = useContext(CartContext);

  const showCart = () => setCart({ ...cart, show: true });
  const hideCart = () => setCart({ ...cart, show: false });

  // ======== Add new item in cart ========= //

  const addToCart = (payload: any) => {
    if (!cart.items.length) {
      localStorage.setItem("chawkbazar:cart", JSON.stringify([payload]));
      setCart((pre: any) => ({ ...pre, items: [payload] }));
      toast.success("Item added to cart", {
        position: width > 768 ? "bottom-right" : "top-right",
      });
      return;
    }

    const isExist = cart.items.some((item: any) => item.id === payload.id);

    if (isExist) {
      const res = cart.items.map((item: any) =>
        item.id === payload.id ? { ...item, qty: item.qty + payload.qty } : item
      );
      setCart({ ...cart, items: res });
      localStorage.setItem("chawkbazar:cart", JSON.stringify(res));
    } else {
      const newInCart = [...cart.items, payload];
      setCart({ ...cart, items: newInCart });
      localStorage.setItem("chawkbazar:cart", JSON.stringify(newInCart));
    }
    toast.success("Item added to cart", {
      position: width > 768 ? "bottom-right" : "top-right",
    });
  };

  // ========== * ======== //

  const qtyUpdate = (key: string, product: number) => {
    let updated;
    switch (key) {
      case "INCREMENT":
        updated = cart.items.map((item: any) =>
          item.id === product ? { ...item, qty: item.qty + 1 } : item
        );
        break;

      case "DECREMENT":
        updated = cart.items.map((item: any) =>
          item.id === product ? { ...item, qty: item.qty - 1 } : item
        );
        break;
    }

    setCart({ ...cart, items: updated });
    localStorage.setItem("chawkbazar:cart", JSON.stringify(updated));
  };

  // ========== * ======== //

  const removeFromCart = (id: number) => {
    const updatedCart = cart.items.filter((item: any) => item.id !== id);
    setCart({ ...cart, items: updatedCart });
    localStorage.setItem("chawkbazar:cart", JSON.stringify(updatedCart));
    toast.info("Item removed from cart", {
      position: width > 768 ? "bottom-right" : "top-right",
    });
  };

  // ========== * =========== //

  const clearCart = () => {
    localStorage.removeItem("chawkbazar:cart");
    setCart({ show: false, items: [] });
  };

  useEffect(() => {
    setCart({
      ...cart,
      items: JSON.parse(localStorage.getItem("chawkbazar:cart") || "[]"),
    });
  }, []);

  return {
    cartItems: cart.items,
    addToCart,
    showCart,
    hideCart,
    cart: cart.show,
    removeFromCart,
    qtyUpdate,
    clearCart,
  };
};

export default useCart;
