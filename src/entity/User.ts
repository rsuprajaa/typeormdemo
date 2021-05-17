import bcrypt from 'bcrypt'
import { Exclude } from 'class-transformer'
import { IsEmail, Length } from 'class-validator'
import { BeforeInsert, Column, Entity as TOEntity } from 'typeorm'
import Entity from './Entity'

export enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
}

@TOEntity('users')
export class User extends Entity {
	@Column()
	@Length(1, 255)
	firstName: string

	@Column()
	@Length(1, 255)
	lastName: string

	@Column({ unique: true })
	@IsEmail()
	email: string

	@Column()
	@Exclude()
	@Length(6, 255)
	password: string

	@Column('text', { nullable: true })
	description: string

	@Column({
		type: 'enum',
		enum: UserRole,
		default: UserRole.USER,
	})
	role: UserRole

	@BeforeInsert()
	async hashPassword() {
		this.password = await bcrypt.hash(this.password, 6)
	}

	constructor(user: Partial<User>) {
		super()
		Object.assign(this, user)
	}
}
