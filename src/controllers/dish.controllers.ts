import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getDishes = async (req: Request, res:Response) => {
	res.json({message: "This is /dish"})
}

export const getDish = async (req: Request, res:Response) => {
	res.json({message: "This is /dish"})
}

export const updateDish = async (req: Request, res:Response) => {
	res.json({message: "This is /dish"})
}

export const createDish = async (req: Request, res:Response) => {
	res.json({message: "This is /dish"})
}

export const deleteDish = async (req: Request, res:Response) => {
	res.json({message: "This is /dish"})
}