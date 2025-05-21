import UsersService from '../services/usersService.js'

class UsersController {
  constructor() {
    this.service = new UsersService()

    this.service.initialize().catch(err => {
      console.error('Error initializing service')
      throw err
    })
  }

  async getAllUsers(req, res) {
    try {
      const users = await this.service.getAllUsers()
      res.json(users)
    } catch (error) {
      res.status(500).json({ error: 'Error getting users' })
    }
  }

  async getUserById(req, res) {
    try {
      const user = await this.service.getUserById(req.params.id)
      res.json(user)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async createUser(req, res) {
    try {
      const user = await this.service.createUser(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async updateUser(req, res) {
    try {
      const user = await this.service.updateUser(req.params.id, req.body)
      res.json(user)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async deleteUser(req, res) {
    try {
      await this.service.deleteUser(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

export default UsersController
