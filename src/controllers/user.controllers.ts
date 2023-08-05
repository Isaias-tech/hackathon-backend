import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getUsers = async (req: Request, res: Response) => {
	const users = await AppDataSource.manager.findBy(User, {deleted: Not(true)});
	res.json(users);
}

export const getUser = async (req: Request, res: Response) => {
	const {id} = req.params;
	const user = await AppDataSource.manager.findOneBy(User, {id: parseInt(id), deleted: Not(true)});
	res.json(user)
}

export const createUser = async  (req: Request, res: Response) => {
	const { username, name, lastname, position, isActive, isAdmin, isReception } =
		req.body;
	const user = new User();
	user.username = username;
	user.name = name;
	user.lastname = lastname;
	user.position = position;
	user.isActive = isActive;
	user.isAdmin = isAdmin;
	user.isReception = isReception;
	await AppDataSource.manager.save(user);
	res.json({ message: `The user was registered successfully.` });
}

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { user, name, lastname, position, isActive, isAdmin, isReception } =
		req.body;
	const userToUpdate = await AppDataSource.manager.findOneBy(User, {
		id: parseInt(id),
	});

	if (!userToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No user with the id: ${id} was found.` });

	userToUpdate.username = user ? user : userToUpdate.username;
	userToUpdate.name = name ? name : userToUpdate.name;
	userToUpdate.lastname = lastname ? lastname : userToUpdate.lastname;
	userToUpdate.position = position ? position : userToUpdate.position;
	userToUpdate.isActive = isActive ? isActive : userToUpdate.isActive;
	userToUpdate.isAdmin = isAdmin ? isAdmin : userToUpdate.isAdmin;
	userToUpdate.isReception = isReception
		? isReception
		: userToUpdate.isReception;

	await AppDataSource.manager.save(userToUpdate);
	res.json({ message: `The user with the id: ${id} was updated.` });
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const userToUpdate = await AppDataSource.manager.findOneBy(User, {
		id: parseInt(id),
	});

	if (!userToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No user with the id: ${id} was found.` });

	userToUpdate.deleted = true;
	await AppDataSource.manager.save(userToUpdate);
	res.json({ message: `The user with the id: ${id} was deleted.` });
};
