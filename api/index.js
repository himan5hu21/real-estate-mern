import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is runnig on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((value) => value.message);
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: errors.join(" "),
      errors,
    });
  }

  if (err.code && err.code === 11000) {
    const field = Object.keys(err.keyValue);
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: `${field} already exists`,
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "An Internal Server Error Occured";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
