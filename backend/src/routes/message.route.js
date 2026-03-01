import e from "express";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Send Message Endpoint");
});

export default router;