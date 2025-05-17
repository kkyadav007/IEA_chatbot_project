import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ChatbotYoutube",
    });

    console.log("Mongo db connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectDb;
