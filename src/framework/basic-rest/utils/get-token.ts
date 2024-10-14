// import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export const getToken = () => {
  const payload = {
    iss: `${process.env.NEXT_PUBLIC_REST_API}`,

    data: { user: { id: "1" } },
  };

  // const token = jwt.sign(payload, `${process.env.WP_JWT_AUTH_SECRET_KEY!}`, {
  //   expiresIn: 60000,
  // });

  // console.log("hitting");

  return "";
};
