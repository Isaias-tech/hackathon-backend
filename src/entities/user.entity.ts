import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@Column()
	name: string;

	@Column()
	lastname: string;

	@Column()
	position: string;

	@Column({default: true})
	isActive: boolean;

	@Column({default: false})
	isAdmin: boolean;

	@Column({default: false})
	isRestaurant: boolean;

	@Column({default: false})
	isReception: boolean;

	@Column({default: 4000})
	budget: number;

	@Column({nullable: true})
	siteId: number;

	@Column({default: false})
	deleted: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	lastUpdated: Date;
}