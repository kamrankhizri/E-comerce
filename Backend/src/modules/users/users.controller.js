import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "./users.schema.js";
import { 
  getAllUsersModel, 
  getUserModel, 
  getByIdUsersModel, 
  createUsersModel, 
  deleteByIdUsersModel, 
  updateByIdUsersModel 
} from "./users.model.js";



// Register
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user", 
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Middleware: Verify Token
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET || "SECRET_KEY", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded; // attach decoded user
    next();
  });
};

// Middleware: Check Admin
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only" });
  }
  next();
};

// Profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // hide password
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
