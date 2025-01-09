import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = 8000 || 5000;
const MONGOURL = "mongodb+srv://souvikpunk:manson1@cluster0.h88lc.mongodb.net/";

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("database connected successfully");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", route);
