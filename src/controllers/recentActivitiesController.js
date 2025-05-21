import RecentActivitiesService from '../services/recentActivitiesService.js'

class RecentActivitiesController {
  constructor() {
    this.service = new RecentActivitiesService()
    this.service.initialize().catch(err => {
      console.error('Error initializing RecentActivitiesService')
      throw err
    })
  }

  async getAllRecentActivities(req, res) {
    try {
      const recentActivities = await this.service.getAllRecentActivities()
      res.json(recentActivities)
    } catch (error) {
      res.status(500).json({ error: 'Error getting RecentActivities' })
    }
  }

  async getRecentActivityById(req, res) {
    try {
      const recentActivity = await this.service.getRecentActivityById(
        req.params.id
      )
      res.json(recentActivity)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async createRecentActivity(req, res) {
    try {
      const recentActivity = await this.service.createRecentActivity(req.body)
      res.status(201).json(recentActivity)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async updateRecentActivity(req, res) {
    try {
      const recentActivity = await this.service.updateRecentActivity(
        req.params.id,
        req.body
      )
      res.json(recentActivity)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async deleteRecentActivity(req, res) {
    try {
      await this.service.deleteRecentActivity(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

export default RecentActivitiesController
