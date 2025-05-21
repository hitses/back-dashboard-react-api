import { Router } from 'express'
const router = Router()
import TopSellingsController from '../controllers/topSellingsController.js'

const topSellingsController = new TopSellingsController()

router.post(
  '/',
  topSellingsController.createTopSelling.bind(topSellingsController)
)
router.get(
  '/',
  topSellingsController.getAllTopSellings.bind(topSellingsController)
)
router.get(
  '/:id',
  topSellingsController.getTopSellingById.bind(topSellingsController)
)
router.put(
  '/:id',
  topSellingsController.updateTopSelling.bind(topSellingsController)
)
router.delete(
  '/:id',
  topSellingsController.deleteTopSelling.bind(topSellingsController)
)

export default router
