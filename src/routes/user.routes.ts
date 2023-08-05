import { Router } from "express";
import {
	deleteUser,
	getUser,
	getUsers,
	postUsers,
	updateUser,
} from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("", getUsers);
userRoutes.get("/:id", getUser);
userRoutes.post("", postUsers);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
