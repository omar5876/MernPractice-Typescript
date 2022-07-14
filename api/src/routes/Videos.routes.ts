import {Router} from 'express'
import { createVideo, deleteVideo, getVideo, getVideos, updateVideo } from './Videos.controller'

const router = Router()


router.get('/', getVideos)
router.get('/:id', getVideo)
router.post('/', createVideo)
router.put('/:id', updateVideo)
router.delete('/:id', deleteVideo)


export default router