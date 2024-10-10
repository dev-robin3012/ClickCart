import nextClient from "@/api-config/next-client";
import woo_client from "@/api-config/woo-client";
import { AuthContext } from "@/contexts/index";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const { authState, setAuthState } = useContext(AuthContext);

  const router = useRouter();

  const fetchUserInfo = async (userID: number) => {
    try {
      const { data } = await woo_client.get(`customers/${userID}`);
      setAuthState({ isLoggedIn: true, credentials: data });
    } catch (error) {
      console.log("loggedIn user credentials fetching failed for ==> ", error);
    }
  };

  const handleRegister = async (payload: any) => {
    setLoading(true);
    try {
      const reqBody = {
        ...payload,
        billing: {
          first_name: payload.first_name,
          last_name: payload.last_name,
          email: payload.email,
        },
      };

      const { data } = await woo_client.post("customers", reqBody);

      setAuthState({ isLoggedIn: true, credentials: data });
      setCookie("chawkbazar:user_id", data.id);
      setLoading(false);
      router.push("/");
      toast.success("Registration success");
    } catch (error: any) {
      toast.error("Registration failed");
      console.log("registration failed for ==> ", error);
      setLoading(false);
    }
  };

  const handleLogin = async (payload: any) => {
    setLoading(true);
    try {
      const { data } = await nextClient.post("login", payload);
      await fetchUserInfo(data.user_id);
      setCookie("chawkbazar:user_id", data.user_id);
      router.back();
      toast.success(data.message);
      setLoading(false);
      router.push("/");
    } catch (error: any) {
      toast.error(error?.response?.data || "Login failed");
      console.log("login failed for ==> ", error);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await setAuthState({ isLoggedIn: false, credentials: {} });
    deleteCookie("chawkbazar:user_id");
    router.push("/");
  };

  useEffect(() => {
    const userID = getCookie("chawkbazar:user_id");
    if (userID) {
      fetchUserInfo(Number(userID));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    registration: handleRegister,
    login: handleLogin,
    logout: handleLogout,
    isLoggedIn: authState.isLoggedIn,
    credentials: authState.credentials,
    loading,
  };
};

export default useAuth;
