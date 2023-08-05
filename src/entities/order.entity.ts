import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dish } from "./dish.entity";

@Entity()
export class Order {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column({ default: false })
	orderFulfilled: boolean;

	@Column()
	total: number;

	@Column()
	budgedDiscount: number;

	@ManyToMany(() => Dish)
	dishes: Dish[]

	@Column({default: false})
	deleted: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	lastUpdated: Date;
}