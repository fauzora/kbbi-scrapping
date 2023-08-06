import { Router } from "express";
import KbbiController from "../controllers/KbbiController";

const router = Router();

router.get("/cari", KbbiController.search);

export default router;
