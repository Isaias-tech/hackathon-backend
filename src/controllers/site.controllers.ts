import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";
import { Site } from "../entities/site.entity";

export const getSites = async (req: Request, res:Response) => {
	const sites = await AppDataSource.manager.findBy(Site, {deleted: Not(true)});
	res.json(sites);
}

export const getSite = async (req: Request, res:Response) => {
	const {id} = req.params;
	const site = await AppDataSource.manager.findOneBy(Site, {id: parseInt(id), deleted: Not(true)});
	res.json(site)
}

export const updateSite = async (req: Request, res:Response) => {
	const { id } = req.params;
	const { name} =
		req.body;
	const siteToUpdate = await AppDataSource.manager.findOneBy(Site, {
		id: parseInt(id),
	});

	if (!siteToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No site with the id: ${id} was found.` });

	siteToUpdate.name = name ? name : siteToUpdate.name;

	await AppDataSource.manager.save(siteToUpdate);
	res.json({ message: `The site with the id: ${id} was updated.` });
}

export const createSite = async (req: Request, res:Response) => {
	const { name} =
		req.body;
	const site = new Site();
	site.name = name;
	await AppDataSource.manager.save(site);
	res.json({ message: `The site was registered successfully.` });
}

export const deleteSite = async (req: Request, res:Response) => {
	const { id } = req.params;
	const siteToUpdate = await AppDataSource.manager.findOneBy(Site, {
		id: parseInt(id),
	});

	if (!siteToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No site with the id: ${id} was found.` });

	siteToUpdate.deleted = true;
	await AppDataSource.manager.save(siteToUpdate);
	res.json({ message: `The site with the id: ${id} was deleted.` });
}