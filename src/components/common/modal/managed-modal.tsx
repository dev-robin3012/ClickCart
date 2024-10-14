import useModal from "@/hooks/useModal";
import dynamic from "next/dynamic";
import Newsletter from "../newsletter";
import Modal from "./modal";
const LoginForm = dynamic(() => import("@/containers/auth/login-form"));
const SignUpForm = dynamic(() => import("@/containers/auth/sign-up-form"));
const ForgetPasswordForm = dynamic(
  () => import("@/containers/auth/forget-password-form")
);
const ProductPopup = dynamic(
  () => import("@/components/product/product-popup")
);

const ManagedModal: React.FC = () => {
  const { modalView, modalKey, closeModal, data } = useModal();

  return (
    <Modal open={modalView} onClose={closeModal}>
      {modalKey === "LOGIN_VIEW" && <LoginForm />}
      {modalKey === "SIGN_UP_VIEW" && <SignUpForm />}
      {modalKey === "FORGET_PASSWORD" && <ForgetPasswordForm />}
      {modalKey === "PRODUCT_VIEW" && <ProductPopup data={data} />}
      {modalKey === "NEWSLETTER_VIEW" && <Newsletter />}
    </Modal>
  );
};

export default ManagedModal;
