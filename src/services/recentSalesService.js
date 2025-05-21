import recentSaleModel from '../models/RecentSale.js'

import defaultRecentSales from '../data/recentSales.js'

class RecentSalesService {
  async initialize() {
    await recentSaleModel.sync()
    await this.seedDefaultRecentSales()
  }

  async getAllRecentSales() {
    try {
      return await recentSaleModel.findAll()
    } catch (error) {
      throw error
    }
  }

  async getRecentSaleById(recentSaleId) {
    try {
      const recentSale = await recentSaleModel.findByPk(recentSaleId)

      if (!recentSale) throw new Error('RecentSale not found')

      return recentSale
    } catch (error) {
      throw error
    }
  }

  async createRecentSale(recentSaleData) {
    try {
      return await recentSaleModel.create(recentSaleData)
    } catch (error) {
      throw error
    }
  }

  async updateRecentSale(recentSaleId, recentSaleData) {
    try {
      const recentSale = await recentSaleModel.findByPk(recentSaleId)

      if (!recentSale) throw new Error('RecentSale not found')

      return await recentSale.update(recentSaleData)
    } catch (error) {
      throw error
    }
  }

  async deleteRecentSale(recentSaleId) {
    try {
      const recentSale = await recentSaleModel.findByPk(recentSaleId)

      if (!recentSale) throw new Error('RecentSale not found')

      return await recentSale.destroy()
    } catch (error) {
      throw error
    }
  }

  async seedDefaultRecentSales() {
    for (const recentSale of defaultRecentSales) {
      const exists = await recentSaleModel.findByPk(recentSale._id)
      if (!exists) {
        await recentSaleModel.create(recentSale)
      }
    }

    console.log('Default RecentSales created')
  }
}

export default RecentSalesService
