import { Router } from "express";
import { createCity, deleteCity, getCities, getCity, updateCity } from "../controllers/city.controllers";

const cityRoutes = Router();

cityRoutes.get("", getCities);
cityRoutes.get("/:id", getCity);
cityRoutes.post("", createCity);
cityRoutes.put("/:id", updateCity);
cityRoutes.delete("/:id", deleteCity);

export default cityRoutes;