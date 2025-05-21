import { Router } from 'express'
const router = Router()
import CardsController from '../controllers/cardsController.js'

const cardsController = new CardsController()

router.post('/', cardsController.createCard.bind(cardsController))
router.get('/', cardsController.getAllCards.bind(cardsController))
router.get('/:id', cardsController.getCardById.bind(cardsController))
router.put('/:id', cardsController.updateCard.bind(cardsController))
router.delete('/:id', cardsController.deleteCard.bind(cardsController))

export default router
