import { useUI } from "@/contexts/ui.context";
import Cookies from "js-cookie";
import { useMutation } from "react-query";

export interface SignUpInputType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
async function signUp(input: SignUpInputType) {
  // return http.post(API_ENDPOINTS.LOGIN, input);
  return {
    token: `${input.email}.${input.firstName}`.split("").reverse().join(""),
  };
}
export const useSignUpMutation = () => {
  const { authorize, closeModal } = useUI();

  return useMutation((input: SignUpInputType) => signUp(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data.token);
      authorize();
      closeModal();
    },
    onError: (data) => {
      console.log(data, "login error response");
    },
  });
};
