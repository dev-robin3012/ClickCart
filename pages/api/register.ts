import { NextApiRequest, NextApiResponse } from "next";
import woo_client from "src/api-config/woo-client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body);

    const { data } = await woo_client.post("customers", req.body);

    res.send(data);
  } catch (error: any) {
    res.status(error.response.status).send("Registration failed");
  }
};

export default handler;
