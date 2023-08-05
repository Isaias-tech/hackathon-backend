import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "varchar",
		nullable: false
	})
	user: string;

	@Column({
		type: "varchar",
		nullable: false
	})
	name: string;

	@Column({
		type: "varchar",
		nullable: false
	})
	lastname: string;

	@Column({
		type: "varchar",
		nullable: false
	})
	position: string;

	@Column({
		type: "bool",
		default: true
	})
	isActive: boolean;

	@Column({
		type: "bool",
		default: false
	})
	isAdmin: boolean;

	@Column({
		type: "bool",
		default: false
	})
	isReception: boolean;

	@Column({
		type: "bool",
		default: false
	})
	isDeleted: boolean;
}