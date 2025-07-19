import { Router } from "express";
import router from "./hello";

const apiRouter = Router();

apiRouter.use("/api/v1", [router]);

export default apiRouter;
