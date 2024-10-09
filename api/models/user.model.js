import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatar: {
      type: String,
      default:
        "https://ddjkm7nmu27lx.cloudfront.net/reviewer/c0fd1128175348f2869004fdbfdbde4e.png",
    },
    phone: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },
    preferences: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
