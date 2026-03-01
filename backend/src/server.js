import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageroutes from "./routes/message.route.js";
import path from "path";

dotenv.config();




const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;




// Middleware
app.use(express.json());

// Routes
app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageroutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}


// Use PORT from .env

app.listen(PORT, () => {
  console.log("Server running on port : " + PORT);
});