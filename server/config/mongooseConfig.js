import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

async function connectDB() {
mongoose.connect(MONGO_URL).then(() => {
    console.log(`Connected to MongoDB : `+MONGO_URL)
}).catch(() => {
    console.log(`Unable to connect to MongoDB : ${MONGO_URL}`);
})
}
export default connectDB;