import CardsService from '../services/cardsService.js'

class CardsController {
  constructor() {
    this.service = new CardsService()
    this.service.initialize().catch(err => {
      console.error('Error initializing CardsService')
      throw err
    })
  }

  // Método para obtener todas las tarjetas
  async getAllCards(req, res) {
    try {
      const cards = await this.service.getAllCards()
      res.json(cards)
    } catch (error) {
      res.status(500).json({ error: 'Error getting Cards' })
    }
  }

  // Método para obtener una tarjeta por ID
  async getCardById(req, res) {
    try {
      const card = await this.service.getCardById(req.params.id)
      res.json(card)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  // Método para crear una tarjeta
  async createCard(req, res) {
    try {
      const card = await this.service.createCard(req.body)
      res.status(201).json(card)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  // Método para actualizar una tarjeta por ID
  async updateCard(req, res) {
    try {
      const card = await this.service.updateCard(req.params.id, req.body)
      res.json(card)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  // Método para eliminar una tarjeta por ID
  async deleteCard(req, res) {
    try {
      await this.service.deleteCard(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

export default CardsController
