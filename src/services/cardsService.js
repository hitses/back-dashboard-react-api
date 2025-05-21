import cardModel from '../models/Card.js'

import defaultCards from '../data/cards.js'

class CardsService {
  async initialize() {
    await cardModel.sync()
    await this.seedDefaultCards()
  }

  async getAllCards() {
    try {
      return await cardModel.findAll()
    } catch (error) {
      throw error
    }
  }

  async getCardById(cardId) {
    try {
      const card = await cardModel.findByPk(cardId)

      if (!card) throw new Error('Card not found')

      return card
    } catch (error) {
      throw error
    }
  }

  async createCard(cardData) {
    try {
      return await cardModel.create(cardData)
    } catch (error) {
      throw error
    }
  }

  async updateCard(cardId, cardData) {
    try {
      const card = await cardModel.findByPk(cardId)

      if (!card) throw new Error('Card not found')

      return await card.update(cardData)
    } catch (error) {
      throw error
    }
  }

  async deleteCard(cardId) {
    try {
      const card = await cardModel.findByPk(cardId)

      if (!card) throw new Error('Card not found')

      return await card.destroy()
    } catch (error) {
      throw error
    }
  }

  async seedDefaultCards() {
    for (const card of defaultCards) {
      const exists = await cardModel.findByPk(card._id)
      if (!exists) {
        await cardModel.create(card)
      }
    }

    console.log('Default Cards created')
  }
}

export default CardsService
