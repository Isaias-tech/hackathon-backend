import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { Not } from "typeorm";
import { Restaurant } from "../entities/restaurant.entity";

export const getRestaurants = async (req: Request, res:Response) => {
	const restaurant = await AppDataSource.manager.findBy(Restaurant, {deleted: Not(true)});
	res.json(restaurant);
}

export const getRestaurant = async (req: Request, res:Response) => {
	const {id} = req.params;
	const restaurant = await AppDataSource.manager.findOneBy(Restaurant, {id: parseInt(id), deleted: Not(true)});
	res.json(restaurant)
}

export const updateRestaurant = async (req: Request, res:Response) => {
	const { id } = req.params;
	const { name, direction, phoneNumber, principalContact, limitTime } =
		req.body;
	const restaurantToUpdate = await AppDataSource.manager.findOneBy(Restaurant, {
		id: parseInt(id),
	});

	if (!restaurantToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No restaurant with the id: ${id} was found.` });

	restaurantToUpdate.name = name ? name : restaurantToUpdate.name;
	restaurantToUpdate.direction = direction ? direction : restaurantToUpdate.direction;
	restaurantToUpdate.name = phoneNumber ? phoneNumber : restaurantToUpdate.phoneNumber;
	restaurantToUpdate.principalContact = principalContact ? principalContact : restaurantToUpdate.principalContact;
	restaurantToUpdate.limitTime = limitTime ? limitTime : restaurantToUpdate.limitTime;

	await AppDataSource.manager.save(restaurantToUpdate);
	res.json({ message: `The restaurant with the id: ${id} was updated.` });
}

export const createRestaurant = async (req: Request, res:Response) => {
	const { name, direction, phoneNumber, principalContact, limitTime } =
		req.body;
	const restaurant = new Restaurant();
	restaurant.name = name;
	restaurant.direction = direction;
	restaurant.phoneNumber = phoneNumber;
	restaurant.principalContact = principalContact;
	restaurant.limitTime = limitTime;
	await AppDataSource.manager.save(restaurant);
	res.json({ message: `The restaurant was registered successfully.` });
}

export const deleteRestaurant = async (req: Request, res:Response) => {
	res.json({message: "This is /restaurant"})
}