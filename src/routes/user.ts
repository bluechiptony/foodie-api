import express from "express";
import { systemRunAvailablityCheck } from "../handlers/user/user-adapter";
const userRoutes = express.Router();

userRoutes.get("/check/availability", systemRunAvailablityCheck);

export default userRoutes;
