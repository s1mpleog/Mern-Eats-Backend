import { Router } from "express";
import * as User from "../controllers/user.controllers";

const router = Router();

router.route("/").post(User.createCurrentUser);

export default router;
