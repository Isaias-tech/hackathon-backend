import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Log {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToMany(() => User, (user) => user.id)
	users: User[];

	@Column()
	action: string;

	@Column({default: false})
	deleted: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	lastUpdated: Date;
}