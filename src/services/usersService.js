import userModel from '../models/User.js'

class UsersService {
  async initialize() {
    await userModel.sync()
  }

  async getAllUsers() {
    try {
      return await userModel.findAll()
    } catch (error) {
      throw error
    }
  }

  async getUserById(userId) {
    try {
      const user = await userModel.findByPk(userId)

      if (!user) throw new Error('Usuario no encontrado')

      return user
    } catch (error) {
      throw error
    }
  }

  async createUser(userData) {
    try {
      return await userModel.create(userData)
    } catch (error) {
      throw error
    }
  }

  async updateUser(userId, userData) {
    try {
      const user = await userModel.findByPk(userId)

      if (!user) throw new Error('Usuario no encontrado')

      return await user.update(userData)
    } catch (error) {
      throw error
    }
  }

  async deleteUser(userId) {
    try {
      const user = await userModel.findByPk(userId)

      if (!user) throw new Error('Usuario no encontrado')

      return await user.destroy()
    } catch (error) {
      throw error
    }
  }
}

export default UsersService
