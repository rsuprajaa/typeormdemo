import { Request, Response } from 'express'
import { User } from '../entity/User'
import { Video } from '../entity/Video'

export const getUserVideos = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const user = await User.findOne({ id })
		const videos = await Video.find({ user })
		return res.status(200).json(videos)
	} catch (err) {
		return res.status(500).json({ msg: 'Something went wrong' })
	}
}
