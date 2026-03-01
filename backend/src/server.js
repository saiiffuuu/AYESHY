import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageroutes from "./routes/message.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageroutes);
// Use PORT from .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port : " + PORT);
});