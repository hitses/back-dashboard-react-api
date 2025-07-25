import TopSellingsService from '../services/topSellingsService.js'

class TopSellingsController {
  constructor() {
    this.service = new TopSellingsService()
    this.service.initialize().catch(err => {
      console.error('Error initializing TopSellingsService')
      throw err
    })
  }

  // Método para obtener todas el top de ventas
  async getAllTopSellings(req, res) {
    try {
      const topSellings = await this.service.getAllTopSellings()
      res.json(topSellings)
    } catch (error) {
      res.status(500).json({ error: 'Error getting TopSellings' })
    }
  }

  // Método para obtener un top de ventas por ID
  async getTopSellingById(req, res) {
    try {
      const topSelling = await this.service.getTopSellingById(req.params.id)
      res.json(topSelling)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  // Método para crear un top de ventas
  async createTopSelling(req, res) {
    try {
      const topSelling = await this.service.createTopSelling(req.body)
      res.status(201).json(topSelling)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  // Método para actualizar un top de ventas por ID
  async updateTopSelling(req, res) {
    try {
      const topSelling = await this.service.updateTopSelling(
        req.params.id,
        req.body
      )
      res.json(topSelling)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  // Método para eliminar un top de ventas por ID
  async deleteTopSelling(req, res) {
    try {
      await this.service.deleteTopSelling(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

export default TopSellingsController
