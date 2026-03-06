import express from "express";
import type { Request, Response } from "express";
import authRoutes from "./routes/authRoutes.js"
import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
    res.json({ status: "ok" });
})

app.listen(3000, ()=> {
    console.log("Server running on port 3000");

})




