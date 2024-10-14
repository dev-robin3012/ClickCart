import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
// import woo_client from "src/api-config/woo-client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.post(
      `${process.env.WOO_API_BASEURL}/wp-json/custom/v3/user-login`,
      req.body
    );
    if (data.status === "error") return res.status(400).send(data.message);

    // const { data: credentials } = await woo_client.get(`customers/${data.user_id}`);

    res.send(data);
  } catch (error: any) {
    res.status(500).send("Login failed");
  }
};

export default handler;
