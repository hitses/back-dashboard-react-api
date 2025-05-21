import { Router } from 'express'
const router = Router()
import UsersController from '../controllers/usersController.js'

const usersController = new UsersController()

router.post('/', usersController.createUser.bind(usersController))
router.get('/', usersController.getAllUsers.bind(usersController))
router.get('/:id', usersController.getUserById.bind(usersController))
router.put('/:id', usersController.updateUser.bind(usersController))
router.delete('/:id', usersController.deleteUser.bind(usersController))

export default router
