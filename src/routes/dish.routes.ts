import { Router } from "express";
import { createDish, deleteDish, getDish, getDishes, updateDish } from "../controllers/dish.controllers";

const dishRoutes = Router();

dishRoutes.get("", getDishes);
dishRoutes.get("/:id", getDish);
dishRoutes.post("", createDish);
dishRoutes.put("/:id", updateDish);
dishRoutes.delete("/:id", deleteDish);

export default dishRoutes;