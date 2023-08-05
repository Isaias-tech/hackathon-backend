import { DataSource } from "typeorm"
import { DB_PORT, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER } from "../utils/constants"
import { User } from "../entities/user.entity";
import { Site } from "../entities/site.entity";
import { Dish } from "../entities/dish.entity";
import { DishCategory } from "../entities/dishCategory.entity";
import { Menu } from "../entities/menu.entity";
import { Order } from "../entities/order.entity";
import { Restaurant } from "../entities/restaurant.entity";
import { City } from "../entities/city.entity";


export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: DB_PORT,
	username: POSTGRES_USER,
	password: POSTGRES_PASSWORD,
	database: POSTGRES_DB,
	synchronize: true,
	logging: true,
	entities: [User, Site, Dish, DishCategory, Menu, Order, Restaurant, City],
	subscribers: [],
	migrations: [],
})

export default AppDataSource;