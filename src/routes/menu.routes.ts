import { Router } from "express";
import { createMenu, deleteMenu, getMenu, getMenus, updateMenu } from "../controllers/menu.controllers";

const menuRoutes = Router();

menuRoutes.get("", getMenus);
menuRoutes.get("/:id", getMenu);
menuRoutes.post("", createMenu);
menuRoutes.put("/:id", updateMenu);
menuRoutes.delete("/:id", deleteMenu);

export default menuRoutes;