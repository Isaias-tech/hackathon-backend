import { Request, Response } from "express";
import { User } from "../entities/user.entitie";
import AppDataSource from "../config/data-source";
import { Not } from "typeorm";

export const getUsers = async (req: Request, res: Response) => {
	const users = await AppDataSource.manager.findBy(User, {isDeleted: Not(true)});
	res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const users = await AppDataSource.manager.findOneBy(User, {
		id: parseInt(id),
		isDeleted: Not(true)
	});
	res.json(users);
};

export const postUsers = async (req: Request, res: Response) => {
	const { user, name, lastname, position, isActive, isAdmin, isReception } =
		req.body;
	const userEntitie = new User();
	userEntitie.user = user;
	userEntitie.name = name;
	userEntitie.lastname = lastname;
	userEntitie.position = position;
	userEntitie.isActive = isActive;
	userEntitie.isAdmin = isAdmin;
	userEntitie.isReception = isReception;
	await AppDataSource.manager.save(userEntitie);
	res.json({ message: `The user was registered successfully.` });
};

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

	userToUpdate.user = user ? user : userToUpdate.user;
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

	userToUpdate.isDeleted = true;
	await AppDataSource.manager.save(userToUpdate);
	res.json({ message: `The user with the id: ${id} was deleted.` });
};
