import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    //const BASE_URL = process.env.CONNECT_URL;
    const BASE_URL = `${process.env.PORTDB}/${process.env.DB}`;
    console.log(BASE_URL);
    await mongoose.connect(BASE_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
