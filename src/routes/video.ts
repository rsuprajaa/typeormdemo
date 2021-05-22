import { Router } from 'express'
import { addVideo, deleteVideo, getVideo, getVideos, updateVideo } from '../controllers/video'
import auth from '../middleware/auth'

const router = Router()
router.post('/', auth, addVideo)
router.get('/', getVideos)
router.get('/:id', getVideo)
router.put('/:id', updateVideo)
router.delete('/:id', deleteVideo)
router.delete('/:id', deleteVideo)

export default router
