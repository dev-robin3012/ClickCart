import mongoose, { model, Schema } from "mongoose";

export interface UserDocument {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  refreshToken: string;
  role: "admin" | "customer";
}

const UserSchema = new Schema<UserDocument>(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: String,
    phone: String,
    image: String,
    refreshToken: String,
    role: { type: String, enum: ["admin", "customer"], default: "customer" },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);

export default User;
