import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";
import { Order } from "../entities/order.entity";

export const getOrders = async (req: Request, res:Response) => {
	const orders = await AppDataSource.manager.findBy(Order, {deleted: Not(true)});
	res.json(orders);
}

export const getOrder = async (req: Request, res:Response) => {
	const {id} = req.params;
	const order = await AppDataSource.manager.findOneBy(Order, {id: parseInt(id), deleted: Not(true)});
	res.json(order)
}

export const updateOrder = async (req: Request, res:Response) => {
	const { id } = req.params;
	const { name, total, budgedDiscount } =
		req.body;
	const orderToUpdate = await AppDataSource.manager.findOneBy(Order, {
		id: parseInt(id),
	});

	if (!orderToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No order with the id: ${id} was found.` });

	orderToUpdate.name = name ? name : orderToUpdate.name;
	orderToUpdate.total = total ? total : orderToUpdate.total;
	orderToUpdate.budgedDiscount = budgedDiscount ? budgedDiscount : orderToUpdate.budgedDiscount;

	await AppDataSource.manager.save(orderToUpdate);
	res.json({ message: `The order with the id: ${id} was updated.` });
}

export const createOrder = async (req: Request, res:Response) => {
	const { name, total, budgedDiscount } =
		req.body;
	const order = new Order();
	order.name = name;
	order.total = total;
	order.budgedDiscount = budgedDiscount;
	await AppDataSource.manager.save(order);
	res.json({ message: `The order was registered successfully.` });
}

export const deleteOrder = async (req: Request, res:Response) => {
	const { id } = req.params;
	const orderToUpdate = await AppDataSource.manager.findOneBy(Order, {
		id: parseInt(id),
	});

	if (!orderToUpdate)
		return res
			.sendStatus(404)
			.json({ message: `No order with the id: ${id} was found.` });

	orderToUpdate.deleted = true;
	await AppDataSource.manager.save(orderToUpdate);
	res.json({ message: `The order with the id: ${id} was deleted.` });
}