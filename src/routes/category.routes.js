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

router.get("/categories", getCategories);
router.get("/category/:id", getCategory);
router.post("/create-category", validateSchema(categorySchema), createCategory);
router.delete("/delte-categoy/:id", deleteCategory);

export default router;
