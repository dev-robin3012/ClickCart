import { ModalContext } from "@/contexts/index";
import { useContext } from "react";

type modalOptions =
  | "LOGIN_VIEW"
  | "SIGN_UP_VIEW"
  | "FORGET_PASSWORD"
  | "PRODUCT_VIEW"
  | "NEWSLETTER_VIEW";

const useModal = () => {
  // @ts-ignore
  const { modalState, setModalState } = useContext(ModalContext);

  const openModal = (key: modalOptions, data?: {}) =>
    setModalState({ view: true, key, data });
  const closeModal = () => setModalState({ view: false, key: "", data: {} });

  return {
    modalView: modalState.view,
    modalKey: modalState.key,
    data: modalState.data,
    openModal,
    closeModal,
  };
};

export default useModal;
