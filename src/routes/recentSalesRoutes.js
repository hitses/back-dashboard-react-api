import { Router } from 'express'
const router = Router()
import RecentSalesController from '../controllers/recentSalesController.js'

const recentSalesController = new RecentSalesController()

router.post(
  '/',
  recentSalesController.createRecentSale.bind(recentSalesController)
)
router.get(
  '/',
  recentSalesController.getAllRecentSales.bind(recentSalesController)
)
router.get(
  '/:id',
  recentSalesController.getRecentSaleById.bind(recentSalesController)
)
router.put(
  '/:id',
  recentSalesController.updateRecentSale.bind(recentSalesController)
)
router.delete(
  '/:id',
  recentSalesController.deleteRecentSale.bind(recentSalesController)
)

export default router
