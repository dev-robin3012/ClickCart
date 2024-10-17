import { connectDB } from "@/DB/connection";
import User from "@/DB/models/user";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    await connectDB();
    const hashedPassword = await bcrypt
      .hash(req.body.password, 10)
      .catch(() => {
        throw new Error("Password missing");
      });

    const user = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const response = user.toObject();
    delete response.password;

    res.status(200).json(response);
  } catch (error: any) {
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "Account already existing with this email" });
    }

    res
      .status(500)
      .json({ message: error.message || "An error occurred on the server" });
  }
}
