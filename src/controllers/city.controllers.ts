import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getCities = async (req: Request, res:Response) => {
	res.json({message: "This is /city"})
}

export const getCity = async (req: Request, res:Response) => {
	res.json({message: "This is /city"})
}

export const updateCity = async (req: Request, res:Response) => {
	res.json({message: "This is /city"})
}

export const createCity = async (req: Request, res:Response) => {
	res.json({message: "This is /city"})
}

export const deleteCity = async (req: Request, res:Response) => {
	res.json({message: "This is /city"})
}