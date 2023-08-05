import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getOrders = async (req: Request, res:Response) => {
	res.json({message: "This is /order"})
}

export const getOrder = async (req: Request, res:Response) => {
	res.json({message: "This is /order"})
}

export const updateOrder = async (req: Request, res:Response) => {
	res.json({message: "This is /order"})
}

export const createOrder = async (req: Request, res:Response) => {
	res.json({message: "This is /order"})
}

export const deleteOrder = async (req: Request, res:Response) => {
	res.json({message: "This is /order"})
}