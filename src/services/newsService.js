import newModel from '../models/New.js'

import defaultNews from '../data/news.js'

class NewsService {
  async initialize() {
    await newModel.sync()
    await this.seedDefaultNews()
  }

  // Método para obtener todas las noticias
  async getAllNews() {
    try {
      return await newModel.findAll()
    } catch (error) {
      throw error
    }
  }

  // Método para obtener una noticia por ID
  async getNewById(newId) {
    try {
      const news = await newModel.findByPk(newId)

      if (!news) throw new Error('New not found')

      return news
    } catch (error) {
      throw error
    }
  }

  // Método para crear una noticia
  async createNew(newData) {
    try {
      return await newModel.create(newData)
    } catch (error) {
      throw error
    }
  }

  // Método para actualizar una noticia por ID
  async updateNew(newId, newData) {
    try {
      const news = await this.getNewById(newId)

      if (!news) throw new Error('New not found')

      return await news.update(newData)
    } catch (error) {
      throw error
    }
  }

  // Método para eliminar una noticia por ID
  async deleteNew(newId) {
    try {
      const news = await this.getNewById(newId)

      if (!news) throw new Error('New not found')

      return await news.destroy()
    } catch (error) {
      throw error
    }
  }

  // Método para crear noticias por semilla al iniciar el servidor
  async seedDefaultNews() {
    for (const news of defaultNews) {
      const exists = await newModel.findByPk(news._id)
      if (!exists) {
        await newModel.create(news)
      }
    }

    console.log('Default News created')
  }
}

export default NewsService
