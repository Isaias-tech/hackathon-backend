import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { Not } from "typeorm";
import { Dish } from "../entities/dish.entity";

export const getDishes = async (req: Request, res:Response) => {
	const dishes = await AppDataSource.manager.findBy(Dish, {deleted: Not(true)});
	res.json(dishes);
}

export const getDish = async (req: Request, res:Response) => {
	const {id} = req.params;
	const dish = await AppDataSource.manager.findOneBy(Dish, {id: parseInt(id), deleted: Not(true)});
	res.json(dish)
}

export const updateDish = async (req: Request, res:Response) => {
	const { id } = req.params;
	const { name, price } =
		req.body;
	const dishToUpdate = await AppDataSource.manager.findOneBy(Dish, {
		id: parseInt(id),
	});

	if (!dishToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No user with the id: ${id} was found.` });

	dishToUpdate.name = name ? name : dishToUpdate.name;
	dishToUpdate.price = price ? price : dishToUpdate.price;

	await AppDataSource.manager.save(dishToUpdate);
	res.json({ message: `The dish with the id: ${id} was updated.` });
}

export const createDish = async (req: Request, res:Response) => {
	const { name, price } =
		req.body;
	const dish = new Dish();
	dish.name = name;
	dish.price = price;
	await AppDataSource.manager.save(dish);
	res.json({ message: `The dish was registered successfully.` });
}

export const deleteDish = async (req: Request, res:Response) => {
	const { id } = req.params;
	const dish = await AppDataSource.manager.findOneBy(Dish, {
		id: parseInt(id),
	});

	if (!dish)
		return res
			.sendStatus(404)
			.json({ message: `No dish with the id: ${id} was found.` });

	dish.deleted = true;
	await AppDataSource.manager.save(dish);
	res.json({ message: `The dish with the id: ${id} was deleted.` });
}