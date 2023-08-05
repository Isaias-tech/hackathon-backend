import { Router } from "express";
import { createLog, deleteLog, getLog, getLogs, updateLog } from "../controllers/log.controllers";

const logRoutes = Router();

logRoutes.get("", getLogs);
logRoutes.get("/:id", getLog);
logRoutes.post("", createLog);
logRoutes.put("/:id", updateLog);
logRoutes.delete("/:id", deleteLog);

export default logRoutes;