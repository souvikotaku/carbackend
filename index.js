import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; // Use import for CORS
import route from "./routes/userRoute.js";

const app = express();

dotenv.config();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Environment Variables
const PORT = process.env.PORT || 5000; // Use environment variable or default to 8000
const MONGOURL = process.env.MONGO_URL;

// Connect to MongoDB and Start Server
mongoose
  .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true }) // Pass connection options to avoid warnings
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Routes
app.use("/api/user", route);
