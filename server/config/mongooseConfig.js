import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

async function connectDB() {
// Parse the MongoDB connection string
const parsedUrl = new URL(MONGO_URL);
// Extract the host name
const hostName = parsedUrl.host;
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.warn(`MongoDB connected : ` +hostName)
  } catch (error) {
    console.error(`Unable to connect to MongoDB: ${MONGO_URL}`, error);
    
  }
}

export default connectDB;
