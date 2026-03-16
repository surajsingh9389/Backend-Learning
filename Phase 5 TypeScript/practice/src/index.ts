import express from "express";
import type { Request, Response } from "express";
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"

import authRoutes from "./routes/authRoutes.js"
import "dotenv/config";
import { connectDB } from "./config/database.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { limiter } from "./utils/rateLimiter.js";



const app = express();

// parse incoming text-json 
app.use(express.json());

// Security Headers 
app.use(helmet())

// Allow your frontend to call API 
app.use(cors())

// Helps debugging API traffic 
app.use(morgan("dev"))

app.use(limiter)

// prevent brute force login, API spam, bots
app.use("/auth", authRoutes);

connectDB();

app.get("/", (req: Request, res: Response) => {
    res.json({ status: "ok" });
})

app.use(errorHandler)

app.listen(3000, ()=> {
    console.log("Server running on port 3000");

})




