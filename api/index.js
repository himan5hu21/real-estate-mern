import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process with failure
  }
};

// Initialize Express app
const app = express();
app.use(express.json());

// Register routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message =
    err.name === "ValidationError"
      ? Object.values(err.errors)
          .map((value) => value.message)
          .join(" ")
      : err.code === 11000
      ? `${Object.keys(err.keyValue)[0]} already exists`
      : err.message || "An Internal Server Error Occurred";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server and connect to the database
const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

startServer();
