import { Router } from "express";
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from "../controllers/order.controllers";

const orderRoutes = Router();

orderRoutes.get("", getOrders);
orderRoutes.get("/:id", getOrder);
orderRoutes.post("", createOrder);
orderRoutes.put("/:id", updateOrder);
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;