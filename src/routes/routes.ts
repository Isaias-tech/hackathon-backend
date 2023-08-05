import { Router } from "express";
import userRoutes from "./user.routes";
import cityRoutes from "./city.routes";
import dishRoutes from "./dish.routes";
import logRoutes from "./log.routes";
import menuRoutes from "./menu.routes";
import orderRoutes from "./order.routes";
import restaurantRoutes from "./restaurant.routes";
import siteRoutes from "./site.routes";
import dishCategoryRoutes from "./dishCategory.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/city", cityRoutes);
router.use("/dish", dishRoutes);
router.use("/log", logRoutes);
router.use("/menu", menuRoutes);
router.use("/order", orderRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/site", siteRoutes);
router.use("/dishcategory", dishCategoryRoutes);


export default router;