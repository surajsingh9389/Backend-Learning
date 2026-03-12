import express from "express";
import type { Request, Response } from "express";
import authRoutes from "./routes/authRoutes.js"
import "dotenv/config";
import { connectDB } from "./config/database.js";
import { errorHandler } from "./middleware/errorHandler.js";



const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

connectDB();

app.get("/", (req: Request, res: Response) => {
    res.json({ status: "ok" });
})

app.use(errorHandler)

app.listen(3000, ()=> {
    console.log("Server running on port 3000");

})




