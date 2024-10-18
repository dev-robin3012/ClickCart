import ManagedModal from "@/components/common/modal/managed-modal";
import Typography from "@/components/typography";
import { Category } from "@/framework/basic-rest/types";
import getCategories from "@/services/category/get-categories";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useState } from "react";
import { useQuery } from "react-query";

interface CartItem {
  product: string | number;
  qty: number;
}

interface ICartState {
  show: boolean;
  items: CartItem[];
}

export const CartContext = createContext({});
export const ModalContext = createContext({});
export const AuthContext = createContext({});
export const CategoryContext = createContext<{
  categories: Category[];
  isLoading: boolean;
}>({ categories: [], isLoading: true });

const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();

  const [cart, setCart] = useState<ICartState>({ show: false, items: [] });
  const [modalState, setModalState] = useState({
    view: false,
    key: "",
    data: {},
  });

  const { data: categories = [], isLoading } = useQuery(
    "cetegory-fetch",
    async () => {
      const categories: any = await getCategories();
      return categories;
    }
  );

  if (status === "loading") {
    return (
      <main className="flex items-center justify-center h-[100dvh] ">
        <Typography variant="h2">Loading...</Typography>
      </main>
    );
  }

  return (
    <CategoryContext.Provider value={{ categories, isLoading }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <ModalContext.Provider value={{ modalState, setModalState }}>
          {children}
          <ManagedModal />
        </ModalContext.Provider>
      </CartContext.Provider>
    </CategoryContext.Provider>
  );
};

export default ContextWrapper;
