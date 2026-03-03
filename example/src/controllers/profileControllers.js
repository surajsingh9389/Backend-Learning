import { User } from "../models/User.js";

export async function getProfile(req, res){
  const user = await User.findById(req.user.id).select("-password");

  if (!user) {
    const err = new Error("User not found");
    err.status = 404;
    throw err;
  }

  res.json(user);
}