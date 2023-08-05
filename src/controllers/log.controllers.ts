import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { Not } from "typeorm";
import { Log } from "../entities/log.entity";

export const getLogs = async (req: Request, res:Response) => {
	const logs = await AppDataSource.manager.findBy(Log, {deleted: Not(true)});
	res.json(logs);
}

export const getLog = async (req: Request, res:Response) => {
	const {id} = req.params;
	const log = await AppDataSource.manager.findOneBy(Log, {id: parseInt(id), deleted: Not(true)});
	res.json(log)
}

export const updateLog = async (req: Request, res:Response) => {
	const { id } = req.params;
	const { action} =
		req.body;
	const logToUpdate = await AppDataSource.manager.findOneBy(Log, {
		id: parseInt(id),
	});

	if (!logToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No log with the id: ${id} was found.` });

	logToUpdate.action = action ? action : logToUpdate.action;
	await AppDataSource.manager.save(logToUpdate);
	res.json({ message: `The log with the id: ${id} was updated.` });
}

export const createLog = async (req: Request, res:Response) => {
	const { action } =
		req.body;
	const log = new Log();
	log.action = action;
	await AppDataSource.manager.save(log);
	res.json({ message: `The log was registered successfully.` });
}

export const deleteLog = async (req: Request, res:Response) => {
	const { id } = req.params;
	const logToUpdate = await AppDataSource.manager.findOneBy(Log, {
		id: parseInt(id),
	});

	if (!logToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No log with the id: ${id} was found.` });

	logToUpdate.deleted = true;
	await AppDataSource.manager.save(logToUpdate);
	res.json({ message: `The log with the id: ${id} was deleted.` });
}