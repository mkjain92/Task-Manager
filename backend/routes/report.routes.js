import express from "express"
import { adminOnly, verifyToken } from "../utils/verifyUser";
import { exportTaskReport, exportUsersReport } from "../controller/report.controller";

const router = express.Router();

router.get("/export/tasks", verifyToken, adminOnly, exportTaskReport)
router.get("/export/tasks", verifyToken, adminOnly, exportUsersReport)
export default router