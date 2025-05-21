import { Router } from 'express'
const router = Router()
import NewsController from '../controllers/newsController.js'

const newsController = new NewsController()

router.post('/', newsController.createNew.bind(newsController))
router.get('/', newsController.getAllNews.bind(newsController))
router.get('/:id', newsController.getNewById.bind(newsController))
router.put('/:id', newsController.updateNew.bind(newsController))
router.delete('/:id', newsController.deleteNew.bind(newsController))

export default router
