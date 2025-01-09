import express from "express";
import { fetch, create } from "../controller/userController.js";

const route = express.Router();

route.get("/fetch", fetch);
route.post("/create", create);

export default route;
