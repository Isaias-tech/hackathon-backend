import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getSites = async (req: Request, res:Response) => {
	res.json({message: "This is /site"})
}

export const getSite = async (req: Request, res:Response) => {
	res.json({message: "This is /site"})
}

export const updateSite = async (req: Request, res:Response) => {
	res.json({message: "This is /site"})
}

export const createSite = async (req: Request, res:Response) => {
	res.json({message: "This is /site"})
}

export const deleteSite = async (req: Request, res:Response) => {
	res.json({message: "This is /site"})
}