import { Router } from 'express'
const router = Router()
import RecentActivitiesController from '../controllers/recentActivitiesController.js'

const recentActivitiesController = new RecentActivitiesController()

router.post(
  '/',
  recentActivitiesController.createRecentActivity.bind(
    recentActivitiesController
  )
)
router.get(
  '/',
  recentActivitiesController.getAllRecentActivities.bind(
    recentActivitiesController
  )
)
router.get(
  '/:id',
  recentActivitiesController.getRecentActivityById.bind(
    recentActivitiesController
  )
)
router.put(
  '/:id',
  recentActivitiesController.updateRecentActivity.bind(
    recentActivitiesController
  )
)
router.delete(
  '/:id',
  recentActivitiesController.deleteRecentActivity.bind(
    recentActivitiesController
  )
)

export default router
