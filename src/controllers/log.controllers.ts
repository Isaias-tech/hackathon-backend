import {Request, Response} from "express";
import AppDataSource from "../config/data-source";
import { User } from "../entities/user.entity";
import { Not } from "typeorm";

export const getLogs = async (req: Request, res:Response) => {
	res.json({message: "This is /log"})
}

export const getLog = async (req: Request, res:Response) => {
	res.json({message: "This is /log"})
}

export const updateLog = async (req: Request, res:Response) => {
	res.json({message: "This is /log"})
}

export const createLog = async (req: Request, res:Response) => {
	res.json({message: "This is /log"})
}

export const deleteLog = async (req: Request, res:Response) => {
	res.json({message: "This is /log"})
}