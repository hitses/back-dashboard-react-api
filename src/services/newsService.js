import newModel from '../models/New.js'

import defaultNews from '../data/news.js'

class NewsService {
  async initialize() {
    await newModel.sync()
    await this.seedDefaultNews()
  }

  async getAllNews() {
    try {
      return await newModel.findAll()
    } catch (error) {
      throw error
    }
  }

  async getNewById(newId) {
    try {
      const news = await newModel.findByPk(newId)

      if (!news) throw new Error('New not found')

      return news
    } catch (error) {
      throw error
    }
  }

  async createNew(newData) {
    try {
      return await newModel.create(newData)
    } catch (error) {
      throw error
    }
  }

  async updateNew(newId, newData) {
    try {
      const news = await newModel.findByPk(newId)

      if (!news) throw new Error('New not found')

      return await news.update(newData)
    } catch (error) {
      throw error
    }
  }

  async deleteNew(newId) {
    try {
      const news = await newModel.findByPk(newId)

      if (!news) throw new Error('New not found')

      return await news.destroy()
    } catch (error) {
      throw error
    }
  }

  async seedDefaultNews() {
    for (const news of defaultNews) {
      const exists = await newModel.findByPk(news.id)
      if (!exists) {
        await newModel.create(news)
      }
    }

    console.log('Default News created')
  }
}

export default NewsService
