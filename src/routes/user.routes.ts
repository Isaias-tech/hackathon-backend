import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.get("", getUsers);
userRoutes.get("/:id", getUser);
userRoutes.post("", createUser);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;