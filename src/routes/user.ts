import { Router } from 'express'
import { getUserVideos } from '../controllers/user'

const router = Router()
router.get('/:id/videos', getUserVideos)

export default router
