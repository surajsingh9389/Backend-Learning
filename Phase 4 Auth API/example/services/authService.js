import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const USERS_FILE = "./users.json";

function readUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE));
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export async function registerUser({ email, password }) {
  const users = readUsers();

  const exists = users.find((u) => u.email === email);
  if (exists) {
    const err = new Error("User already exists");
    err.statusCode = 409;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: Date.now(),
    email,
    password: hashedPassword,
  };

  users.push(user);
  writeUsers(users);

  return { id: user.id, emai: user.email };
}

export async function loginUser({ email, password }) {
  const users = readUsers();
  const user = users.find((u) => u.email === email);

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

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return { token };
}
