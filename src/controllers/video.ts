import { Request, Response } from 'express'
import { cloudinary } from '../cloudinary'
import { Video } from '../entity/Video'

export const addVideo = async (req: Request, res: Response) => {
	try {
		const { title, description, videoCode } = req.body
		const { user } = res.locals
		if (!title) {
			res.status(500).json({ msg: 'Video should have a title' })
		}
		if (!videoCode) {
			res.status(500).json({ msg: 'Video should have a url' })
		}
		const video = new Video({
			title,
			description,
			user,
		})
		await video.save()
		return res.status(200).json(video)
	} catch (err) {
		return res.status(500).json({ msg: 'Something went wrong' })
	}
}

export const getVideos = async (_: Request, res: Response) => {
	try {
		const videos = await Video.find()
		return res.status(200).json(videos)
	} catch (err) {
		return res.status(500).json({ msg: 'Something went wrong' })
	}
}

export const getVideo = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const videos = await Video.findOneOrFail({ id })
		return res.status(200).json(videos)
	} catch (err) {
		return res.status(500).json({ msg: 'Video not found' })
	}
}

export const updateVideo = async (req: Request, res: Response) => {
	const { id } = req.params
	const { title, description, url } = req.body
	try {
		const video = await Video.findOne({ id })
		if (!video) {
			return res.status(400).json({ msg: 'Video not found' })
		}
		video.title = title || video.title
		video.description = description || video.description
		await video.save()
		return res.status(200).json(video)
	} catch (err) {
		return res.status(500).json({ msg: 'Video not found' })
	}
}

export const deleteVideo = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const video = await Video.findOne({ id })
		if (!video) {
			return res.status(400).json({ msg: 'Video not found' })
		}
		await video.remove()
		return res.status(200).json({ msg: 'Video deleted' })
	} catch (err) {
		return res.status(500).json({ msg: 'Video not found' })
	}
}
