import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getMenus = async (req: Request, res:Response) => {
	res.json({message: "This is /menu"})
}

export const getMenu = async (req: Request, res:Response) => {
	res.json({message: "This is /menu"})
}

export const updateMenu = async (req: Request, res:Response) => {
	res.json({message: "This is /menu"})
}

export const createMenu = async (req: Request, res:Response) => {
	res.json({message: "This is /menu"})
}

export const deleteMenu = async (req: Request, res:Response) => {
	res.json({message: "This is /menu"})
}