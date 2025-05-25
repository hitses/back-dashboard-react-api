import recentActivityModel from '../models/RecentActivity.js'

import defaultRecentActivities from '../data/recentActivities.js'

class RecentActivitiesService {
  async initialize() {
    await recentActivityModel.sync()
    await this.seedDefaultRecentActivities()
  }

  // Método para obtener todas las actividades recientes
  async getAllRecentActivities() {
    try {
      return await recentActivityModel.findAll()
    } catch (error) {
      throw error
    }
  }

  // Método para obtener una actividad reciente por ID
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

  // Método para crear una actividad reciente
  async createRecentActivity(recentActivityData) {
    try {
      return await recentActivityModel.create(recentActivityData)
    } catch (error) {
      throw error
    }
  }

  // Método para actualizar una actividad reciente por ID
  async updateRecentActivity(recentActivityId, recentActivityData) {
    try {
      const recentActivity = await this.getRecentActivityById(recentActivityId)

      if (!recentActivity) throw new Error('RecentActivity not found')

      return await recentActivity.update(recentActivityData)
    } catch (error) {
      throw error
    }
  }

  // Método para eliminar una actividad reciente por ID
  async deleteRecentActivity(recentActivityId) {
    try {
      const recentActivity = await this.getRecentActivityById(recentActivityId)

      if (!recentActivity) throw new Error('RecentActivity not found')

      return await recentActivity.destroy()
    } catch (error) {
      throw error
    }
  }

  // Método para crear actividades recientes por semilla al iniciar el servidor
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
