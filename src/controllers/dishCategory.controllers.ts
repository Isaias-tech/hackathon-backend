import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";
import { DishCategory } from "../entities/dishCategory.entity";

export const getDishCategories = async (req: Request, res:Response) => {
	const dishCategories = await AppDataSource.manager.findBy(DishCategory, {deleted: Not(true)});
	res.json(dishCategories);
}

export const getDishCategory = async (req: Request, res:Response) => {
	const {id} = req.params;
	const dishCategories = await AppDataSource.manager.findOneBy(DishCategory, {id: parseInt(id), deleted: Not(true)});
	res.json(dishCategories)
}

export const updateDishCategory = async (req: Request, res:Response) => {
	const { id } = req.params;
	const { name } =
		req.body;
	const dishCategoryToUpdate = await AppDataSource.manager.findOneBy(DishCategory, {
		id: parseInt(id),
	});

	if (!dishCategoryToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No dish category with the id: ${id} was found.` });

	dishCategoryToUpdate.name = name ? name : dishCategoryToUpdate.name;

	await AppDataSource.manager.save(dishCategoryToUpdate);
	res.json({ message: `The dish category with the id: ${id} was updated.` });
}

export const createDishCategory = async (req: Request, res:Response) => {
	const { name } =
		req.body;
	const dishCategory = new DishCategory();
	dishCategory.name = name;
	await AppDataSource.manager.save(dishCategory);
	res.json({ message: `The dish category was registered successfully.` });
}

export const deleteDishCategory = async (req: Request, res:Response) => {
	const { id } = req.params;
	const dishCategoryToUpdate = await AppDataSource.manager.findOneBy(DishCategory, {
		id: parseInt(id),
	});

	if (!dishCategoryToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No dish category with the id: ${id} was found.` });

	dishCategoryToUpdate.deleted = true;
	await AppDataSource.manager.save(dishCategoryToUpdate);
	res.json({ message: `The dish category with the id: ${id} was deleted.` });
}