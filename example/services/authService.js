import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/User";

// function readUsers() {
//   return JSON.parse(fs.readFileSync(USERS_FILE));
// }

// function writeUsers(users) {
//   fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
// }

export async function registerUser({ email, password }) {
  const exists = await User.findOne({email});
  if (exists) {
    const err = new Error("User already exists");
    err.statusCode = 409;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword,
  });

  return { id: user._id, emai: user.email };
}

export async function loginUser({ email, password }) {
  
  const user = await User.findOne({ email });

  if (!user) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    throw err;
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return { token };
}
