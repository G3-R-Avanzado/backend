import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
  getUsers,
  deleteUser,
  welcome
} from "../controllers/auth.controller.js";
import {authRequired} from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.get("/", welcome);

router.post("/register",validateSchema(registerSchema), register);

router.post("/login",validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile",authRequired, profile);

router.get("/verify", verifyToken)

router.get("/users",authRequired, getUsers);

router.delete("/users/:id",authRequired, deleteUser );

export default router;
