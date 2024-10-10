import { NextApiRequest, NextApiResponse } from "next";
import woo_client from "src/api-config/woo-client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "POST":
        const { first_name, last_name, address_1, city, email, phone, postcode, items } = req.body;

        const woo_body = {
          payment_method: "bacs",
          payment_method_title: "Direct Bank Transfer",
          set_paid: true,
          billing: {
            first_name,
            last_name,
            address_1,
            address_2: "",
            city,
            state: "",
            postcode,
            country: "BD",
            email,
            phone,
          },
          shipping: {
            first_name,
            last_name,
            address_1,
            address_2: "",
            city,
            state: "",
            postcode,
            country: "BD",
          },
          line_items: items,
        };

        await woo_client.post("orders", woo_body);

        res.send("order placed");
        break;

      case "GET":
        const { customer } = req.query;

        if (!customer) return res.send([]);

        const { data } = await woo_client.get("orders?customer=213");

        res.send(data);
        break;
    }
  } catch (error) {
    console.log("failed");
  }
}
