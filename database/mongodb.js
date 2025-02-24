import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

// Check if the DB_URI environment variable is defined
if (!DB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env<development/production>.local file');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`Connected to MongoDB in ${NODE_ENV} mode
        `);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectToDatabase;