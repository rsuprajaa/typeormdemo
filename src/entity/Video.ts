import { Length } from 'class-validator'
import { Column, Entity as TOEntity, ManyToOne } from 'typeorm'
import Entity from './Entity'
import { User } from './User'

@TOEntity('videos')
export class Video extends Entity {
	@Column()
	@Length(3, 255)
	title: string

	@Column('text', { nullable: true })
	description: string

	@Column()
	cloudName: string

	@Column()
	publicId: string

	@ManyToOne(() => User, (user) => user.videos)
	user: User

	constructor(video: Partial<Video>) {
		super()
		Object.assign(this, video)
	}
}
