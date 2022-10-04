import express from "express";
const router = express.Router();

import {getUser} from "../controllers/main/index"
import { authenticate } from "../middlewares/auth/index";

router.get("/get-user", authenticate, getUser);

export default router;
