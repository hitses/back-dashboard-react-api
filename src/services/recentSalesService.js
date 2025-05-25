import recentSaleModel from '../models/RecentSale.js'

import defaultRecentSales from '../data/recentSales.js'

class RecentSalesService {
  async initialize() {
    await recentSaleModel.sync()
    await this.seedDefaultRecentSales()
  }

  // Método para obtener todas las ventas recientes
  async getAllRecentSales() {
    try {
      return await recentSaleModel.findAll()
    } catch (error) {
      throw error
    }
  }

  // Método para obtener una venta reciente por ID
  async getRecentSaleById(recentSaleId) {
    try {
      const recentSale = await recentSaleModel.findByPk(recentSaleId)

      if (!recentSale) throw new Error('RecentSale not found')

      return recentSale
    } catch (error) {
      throw error
    }
  }

  // Método para crear una venta reciente
  async createRecentSale(recentSaleData) {
    try {
      return await recentSaleModel.create(recentSaleData)
    } catch (error) {
      throw error
    }
  }

  // Método para actualizar una venta reciente por ID
  async updateRecentSale(recentSaleId, recentSaleData) {
    try {
      const recentSale = await this.getRecentSaleById(recentSaleId)

      if (!recentSale) throw new Error('RecentSale not found')

      return await recentSale.update(recentSaleData)
    } catch (error) {
      throw error
    }
  }

  // Método para eliminar una venta reciente por ID
  async deleteRecentSale(recentSaleId) {
    try {
      const recentSale = await this.getRecentSaleById(recentSaleId)

      if (!recentSale) throw new Error('RecentSale not found')

      return await recentSale.destroy()
    } catch (error) {
      throw error
    }
  }

  // Método para crear ventas recientes por semilla al iniciar el servidor
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
