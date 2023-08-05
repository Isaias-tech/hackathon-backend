import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Menu {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({default: false})
	deleted: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	lastUpdated: Date;
}