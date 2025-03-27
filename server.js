import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
