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

    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch)
      return res.status(401).json({ message: "Wrong Password" });

    const response = user.toObject();
    delete response.password;

    res.status(200).json(response);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error.message || "An error occurred on the server" });
  }
}
