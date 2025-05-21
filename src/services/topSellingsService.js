import topSellingModel from '../models/TopSelling.js'

import defaultTopSellings from '../data/topSellings.js'

class TopSellingsService {
  async initialize() {
    await topSellingModel.sync()
    await this.seedDefaultTopSellings()
  }

  async getAllTopSellings() {
    try {
      return await topSellingModel.findAll()
    } catch (error) {
      throw error
    }
  }

  async getTopSellingById(topSellingId) {
    try {
      const topSelling = await topSellingModel.findByPk(topSellingId)

      if (!topSelling) throw new Error('TopSelling not found')

      return topSelling
    } catch (error) {
      throw error
    }
  }

  async createTopSelling(topSellingData) {
    try {
      return await topSellingModel.create(topSellingData)
    } catch (error) {
      throw error
    }
  }

  async updateTopSelling(topSellingId, topSellingData) {
    try {
      const topSelling = await topSellingModel.findByPk(topSellingId)

      if (!topSelling) throw new Error('TopSelling not found')

      return await topSelling.update(topSellingData)
    } catch (error) {
      throw error
    }
  }

  async deleteTopSelling(topSellingId) {
    try {
      const topSelling = await topSellingModel.findByPk(topSellingId)

      if (!topSelling) throw new Error('TopSelling not found')

      return await topSelling.destroy()
    } catch (error) {
      throw error
    }
  }

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
