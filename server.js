import express, { json } from 'express'
import './config/connectDb.js'

import './middlewares/cors.js'

import usersRoutes from './src/routes/usersRoutes.js'

const app = express()
const PORT = process.env.PORT ?? 3000

// Middleware
app.use(json())
app.disable('x-powered-by')

// Rutas
app.use('/users', usersRoutes)

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}: http://localhost:${PORT}`)
})
