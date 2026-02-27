import express from "express";
import authRoutes from "./routes/authRoutes.js";

import 'dotenv/config';
import errorHandler from "./middlewares/errorHandler.js";
import { protect } from "./middlewares/authMiddleware.js";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res)=>{
  res.send("Server is running....");
})

// Example protected route
app.get("/profile", protect, (req, res) => {
  res.json({ message: "Protected route" });
});

app.use(errorHandler);

app.listen(3000, () => console.log("Auth API running"));