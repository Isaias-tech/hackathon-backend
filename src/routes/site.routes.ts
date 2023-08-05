import { Router } from "express";
import { createSite, deleteSite, getSite, getSites, updateSite } from "../controllers/site.controllers";

const siteRoutes = Router();

siteRoutes.get("", getSites);
siteRoutes.get("/:id", getSite);
siteRoutes.post("", createSite);
siteRoutes.put("/:id", updateSite);
siteRoutes.delete("/:id", deleteSite);

export default siteRoutes;