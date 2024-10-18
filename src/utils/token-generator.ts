import jwt from "jsonwebtoken";

const tokenGenerator = (payload: any) => {
  const accessToken = jwt.sign(
    { data: payload },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: "1d" }
  );

  const refreshToken = jwt.sign(
    { data: payload },
    process.env.REFRESH_TOKEN_SECRET as string,
    { expiresIn: "7d" }
  );

  return { accessToken, refreshToken };
};

export default tokenGenerator;
