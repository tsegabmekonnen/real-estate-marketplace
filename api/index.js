import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//defining partial paths
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

//Creating midleware for advanced error handling
app.use((err, req, res, next) => {
  //setting default values when values are not present
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  //bld structured resp load
  return res.status(statusCode).json({
    success: false,
    statusCode, //after ES6
    message,
  });
});
