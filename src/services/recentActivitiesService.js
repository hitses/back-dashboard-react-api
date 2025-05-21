import recentActivityModel from '../models/RecentActivity.js'

import defaultRecentActivities from '../data/recentActivities.js'

class RecentActivitiesService {
  async initialize() {
    await recentActivityModel.sync()
    await this.seedDefaultRecentActivities()
  }

  async getAllRecentActivities() {
    try {
      return await recentActivityModel.findAll()
    } catch (error) {
      throw error
    }
  }

  async getRecentActivityById(recentActivityId) {
    try {
      const recentActivity = await recentActivityModel.findByPk(
        recentActivityId
      )

      if (!recentActivity) throw new Error('RecentActivity not found')

      return recentActivity
    } catch (error) {
      throw error
    }
  }

  async createRecentActivity(recentActivityData) {
    try {
      return await recentActivityModel.create(recentActivityData)
    } catch (error) {
      throw error
    }
  }

  async updateRecentActivity(recentActivityId, recentActivityData) {
    try {
      const recentActivity = await recentActivityModel.findByPk(
        recentActivityId
      )

      if (!recentActivity) throw new Error('RecentActivity not found')

      return await recentActivity.update(recentActivityData)
    } catch (error) {
      throw error
    }
  }

  async deleteRecentActivity(recentActivityId) {
    try {
      const recentActivity = await recentActivityModel.findByPk(
        recentActivityId
      )

      if (!recentActivity) throw new Error('RecentActivity not found')

      return await recentActivity.destroy()
    } catch (error) {
      throw error
    }
  }

  async seedDefaultRecentActivities() {
    for (const recentActivity of defaultRecentActivities) {
      const exists = await recentActivityModel.findByPk(recentActivity._id)
      if (!exists) {
        await recentActivityModel.create(recentActivity)
      }
    }

    console.log('Default RecentActivities created')
  }
}

export default RecentActivitiesService
