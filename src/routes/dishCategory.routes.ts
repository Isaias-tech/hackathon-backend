import { Router } from "express";
import {
	createDishCategory, deleteDishCategory,
	getDishCategories,
	getDishCategory,
	updateDishCategory,
} from "../controllers/dishCategory.controllers";

const dishCategoryRoutes = Router();

dishCategoryRoutes.get("", getDishCategories);
dishCategoryRoutes.get("/:id", getDishCategory);
dishCategoryRoutes.post("", createDishCategory);
dishCategoryRoutes.put("/:id", updateDishCategory);
dishCategoryRoutes.delete("/:id", deleteDishCategory);

export default dishCategoryRoutes;