import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DishCategory } from "./dishCategory.entity";
import { Menu } from "./menu.entity";

@Entity()
export class Dish {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	price: number;

	@ManyToOne(() => DishCategory, (dishCategory) => dishCategory.id)
	dishCategoryId: DishCategory;

	@ManyToOne(() => Menu, (menu) => menu.id)
	menuId: Menu;

	@Column({ default: false })
	wasReceived: boolean;

	@Column({ default: false })
	deleted: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	lastUpdated: Date;
}
