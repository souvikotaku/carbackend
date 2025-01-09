import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; // Use import for CORS
import route from "./routes/userRoute.js";

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// Environment Variables
const PORT = process.env.PORT || 5000; // Default to port 5000 if not specified
const MONGOURL = process.env.MONGO_URL; // MongoDB connection string from .env

// Debugging: Check if MONGO_URL is loaded correctly
if (!MONGOURL) {
  console.error(
    "Error: MONGO_URL is not defined in the environment variables."
  );
  process.exit(1); // Exit if MONGO_URL is missing
}

console.log("MongoDB URL:", MONGOURL); // For debugging purposes

// Connect to MongoDB and start the server
mongoose
  .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true }) // Use recommended options
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Routes
app.use("/api/user", route); // Add your user routes
