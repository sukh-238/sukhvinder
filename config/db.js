import mongoose from "mongoose";

export async function connectDB(mongoURI) {
  try {
    await mongoose.connect(mongoURI);
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1);
  }
}
