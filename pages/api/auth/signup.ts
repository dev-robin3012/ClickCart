import { connectDB } from "@/DB/connection";
import User from "@/DB/models/user";
import tokenGenerator from "@/utils/token-generator";
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

    const { accessToken, refreshToken } = tokenGenerator(req.body.email);

    const user = await User.create({
      ...req.body,
      password: hashedPassword,
      refreshToken,
    });

    const response = user.toObject();
    delete response.password;

    res.setHeader(
      "Set-Cookie",
      `accessToken=${accessToken}; HttpOnly; secure; Path=/;`
    );

    res.status(201).json(response);
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