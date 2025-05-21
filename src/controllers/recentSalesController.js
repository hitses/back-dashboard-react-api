import RecentSalesService from '../services/recentSalesService.js'

class RecentSalesController {
  constructor() {
    this.service = new RecentSalesService()
    this.service.initialize().catch(err => {
      console.error('Error initializing RecentSalesService')
      throw err
    })
  }

  async getAllRecentSales(req, res) {
    try {
      const recentSales = await this.service.getAllRecentSales()
      res.json(recentSales)
    } catch (error) {
      res.status(500).json({ error: 'Error getting RecentSales' })
    }
  }

  async getRecentSaleById(req, res) {
    try {
      const recentSale = await this.service.getRecentSaleById(req.params.id)
      res.json(recentSale)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async createRecentSale(req, res) {
    try {
      const recentSale = await this.service.createRecentSale(req.body)
      res.status(201).json(recentSale)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async updateRecentSale(req, res) {
    try {
      const recentSale = await this.service.updateRecentSale(
        req.params.id,
        req.body
      )
      res.json(recentSale)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async deleteRecentSale(req, res) {
    try {
      await this.service.deleteRecentSale(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

export default RecentSalesController
