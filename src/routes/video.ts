import { Request, Response, Router } from 'express'
import { addVideo, deleteVideo, getVideo, getVideos, updateVideo } from '../controllers/video'
import upload from '../multer'

const router = Router()
router.post('/', upload.single('video'), addVideo)
router.get('/', getVideos)
router.get('/:id', getVideo)
router.put('/:id', updateVideo)
router.delete('/:id', deleteVideo)
router.delete('/:id', deleteVideo)
router.post('/uploadVideo', (_: Request, res: Response) => {
	res.send('Uploaded a new video')
})

export default router
