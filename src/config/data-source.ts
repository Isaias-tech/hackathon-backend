import { DataSource } from "typeorm"
import { DB_PORT, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER } from "../utils/constants"
import { User } from "../entities/user.entitie";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: DB_PORT,
	username: POSTGRES_USER,
	password: POSTGRES_PASSWORD,
	database: POSTGRES_DB,
	synchronize: true,
	logging: true,
	entities: [User],
	subscribers: [],
	migrations: [],
})

export default AppDataSource;