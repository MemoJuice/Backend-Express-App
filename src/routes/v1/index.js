import { Router } from "express";
import { router as usersRouter } from "./users.routes.js";

export const router = Router();

router.use("/users", usersRouter);
