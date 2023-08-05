import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getRestaurants = async (req: Request, res:Response) => {
	res.json({message: "This is /restaurant"})
}

export const getRestaurant = async (req: Request, res:Response) => {
	res.json({message: "This is /restaurant"})
}

export const updateRestaurant = async (req: Request, res:Response) => {
	res.json({message: "This is /restaurant"})
}

export const createRestaurant = async (req: Request, res:Response) => {
	res.json({message: "This is /restaurant"})
}

export const deleteRestaurant = async (req: Request, res:Response) => {
	res.json({message: "This is /restaurant"})
}