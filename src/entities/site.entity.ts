import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city.entity";

@Entity()
export class Site {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany(() => City, (city) => city.id)
	city: City;

	@Column({default: false})
	deleted: boolean;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	lastUpdated: Date;
}