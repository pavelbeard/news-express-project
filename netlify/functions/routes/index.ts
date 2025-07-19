import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from routes/index.ts!" });
});

export default router;
