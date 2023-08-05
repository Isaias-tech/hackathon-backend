import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { Not } from "typeorm";
import { City } from "../entities/city.entity";
import { User } from "../entities/user.entity";

export const getCities = async (req: Request, res:Response) => {
	const cities = await AppDataSource.manager.findBy(City, {deleted: Not(true)});
	res.json(cities);
}

export const getCity = async (req: Request, res:Response) => {
	const {id} = req.params;
	const city = await AppDataSource.manager.findOneBy(City, {id: parseInt(id), deleted: Not(true)});
	res.json(city)
}

export const updateCity = async (req: Request, res:Response) => {
	const { id } = req.params;
	const { name } =
		req.body;
	const cityToUpdate = await AppDataSource.manager.findOneBy(City, {
		id: parseInt(id),
	});

	if (!cityToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No city with the id: ${id} was found.` });

	cityToUpdate.name = name ? name : cityToUpdate.name;

	await AppDataSource.manager.save(cityToUpdate);
	res.json({ message: `The city with the id: ${id} was updated.` });
}

export const createCity = async (req: Request, res:Response) => {
	const { name } =
		req.body;
	const city = new City();
	city.name = name;
	await AppDataSource.manager.save(city);
	res.json({ message: `The city was registered successfully.` });
}

export const deleteCity = async (req: Request, res:Response) => {
	const { id } = req.params;
	const cityToUpdate = await AppDataSource.manager.findOneBy(City, {
		id: parseInt(id),
	});

	if (!cityToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No city with the id: ${id} was found.` });

	cityToUpdate.deleted = true;
	await AppDataSource.manager.save(cityToUpdate);
	res.json({ message: `The city with the id: ${id} was deleted.` });
}