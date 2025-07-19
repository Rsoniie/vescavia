import config from "config";
import mongoose, { mongo } from "mongoose";
let mongoUri = config.get("db.development.mongoUri");

const connectToMongo = async () => {
  try {
    console.log("This is mongoURI", mongoUri);
    const connection = await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.error("Error in connecting to MongoDB", error);
    throw error;
  }
};

export default connectToMongo;
