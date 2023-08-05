import { Router } from "express";
import {
	createRestaurant, deleteRestaurant,
	getRestaurant,
	getRestaurants,
	updateRestaurant,
} from "../controllers/restaurant.controllers";

const restaurantRoutes = Router();

restaurantRoutes.get("", getRestaurants);
restaurantRoutes.get("/:id", getRestaurant);
restaurantRoutes.post("", createRestaurant);
restaurantRoutes.put("/:id", updateRestaurant);
restaurantRoutes.delete("/:id", deleteRestaurant);

export default restaurantRoutes;