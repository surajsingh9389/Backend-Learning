import express from "express";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import { protect } from "./middlewares/authMiddleware.js";
import connectDB from "./config/dg.js";

import 'dotenv/config';
import { getProfile } from "./controllers/profileControllers.js";



const app = express();
app.use(express.json());

connectDB

app.use("/auth", authRoutes);

app.get("/", (req, res)=>{
  res.send("Server is running....");
})

// Example protected route
app.get("/profile", protect, getProfile);

app.use(errorHandler);

app.listen(3000, () => console.log("Auth API running"));