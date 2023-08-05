import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Menu } from "./menu.entity";

@Entity()
export class Restaurant {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	direction: string;

	@Column()
	phoneNumber: number;

	@Column()
	principalContact: number;

	@Column()
	limitTime: Date;

	@OneToMany(() => Menu, (menu) => menu.id)
	menuId: Menu[]

	@Column({default: false})
	deleted: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	lastUpdated: Date;
}
