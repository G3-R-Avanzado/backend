import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { categorySchema } from "../schemas/category.schema.js";

const router = Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/create", validateSchema(categorySchema), createCategory);
router.delete("/delete/:id", deleteCategory);

export default router;
