import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getDishCategories = async (req: Request, res:Response) => {
	res.json({message: "This is /dishcategory"})
}

export const getDishCategory = async (req: Request, res:Response) => {
	res.json({message: "This is /dishcategory"})
}

export const updateDishCategory = async (req: Request, res:Response) => {
	res.json({message: "This is /dishcategory"})
}

export const createDishCategory = async (req: Request, res:Response) => {
	res.json({message: "This is /dishcategory"})
}

export const deleteDishCategory = async (req: Request, res:Response) => {
	res.json({message: "This is /dishcategory"})
}