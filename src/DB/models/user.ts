import mongoose, { model, Schema } from "mongoose";

export interface UserDocument {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
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
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: String,
    image: String,
  },
  { timestamps: true }
);

const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);
export default User;
