import topSellingModel from '../models/TopSelling.js'

import defaultTopSellings from '../data/topSellings.js'

class TopSellingsService {
  async initialize() {
    await topSellingModel.sync()
    await this.seedDefaultTopSellings()
  }

  // Método para obtener todos los top de ventas
  async getAllTopSellings() {
    try {
      return await topSellingModel.findAll()
    } catch (error) {
      throw error
    }
  }

  // Método para obtener un top de ventas por ID
  async getTopSellingById(topSellingId) {
    try {
      const topSelling = await topSellingModel.findByPk(topSellingId)

      if (!topSelling) throw new Error('TopSelling not found')

      return topSelling
    } catch (error) {
      throw error
    }
  }

  // Método para crear un top de ventas
  async createTopSelling(topSellingData) {
    try {
      return await topSellingModel.create(topSellingData)
    } catch (error) {
      throw error
    }
  }

  // Método para actualizar un top de ventas por ID
  async updateTopSelling(topSellingId, topSellingData) {
    try {
      const topSelling = await this.getTopSellingById(topSellingId)

      if (!topSelling) throw new Error('TopSelling not found')

      return await topSelling.update(topSellingData)
    } catch (error) {
      throw error
    }
  }

  // Método para eliminar un top de ventas por ID
  async deleteTopSelling(topSellingId) {
    try {
      const topSelling = await this.getTopSellingById(topSellingId)

      if (!topSelling) throw new Error('TopSelling not found')

      return await topSelling.destroy()
    } catch (error) {
      throw error
    }
  }

  // Método para crear top de ventas por semilla al iniciar el servidor
  async seedDefaultTopSellings() {
    for (const topSelling of defaultTopSellings) {
      const exists = await topSellingModel.findByPk(topSelling._id)
      if (!exists) {
        await topSellingModel.create(topSelling)
      }
    }

    console.log('Default TopSellings created')
  }
}

export default TopSellingsService
