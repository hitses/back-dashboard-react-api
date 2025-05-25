import NewsService from '../services/newsService.js'

class NewsController {
  constructor() {
    this.service = new NewsService()
    this.service.initialize().catch(err => {
      console.error('Error initializing NewsService')
      throw err
    })
  }

  // Método para obtener todas las noticias
  async getAllNews(req, res) {
    try {
      const news = await this.service.getAllNews()
      res.json(news)
    } catch (error) {
      res.status(500).json({ error: 'Error getting News' })
    }
  }

  // Método para obtener una noticia por ID
  async getNewById(req, res) {
    try {
      const news = await this.service.getNewById(req.params.id)
      res.json(news)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  // Método para crear una noticia
  async createNew(req, res) {
    try {
      const news = await this.service.createNew(req.body)
      res.status(201).json(news)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  // Método para actualizar una noticia por ID
  async updateNew(req, res) {
    try {
      const news = await this.service.updateNew(req.params.id, req.body)
      res.json(news)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  // Método para eliminar una noticia por ID
  async deleteNew(req, res) {
    try {
      await this.service.deleteNew(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

export default NewsController
