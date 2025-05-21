import express, { json } from 'express'
import connectDb from './config/connectDb.js'

const startServer = async () => {
  try {
    await connectDb()

    const app = express()
    const PORT = process.env.PORT ?? 3000

    app.use(json())
    app.disable('x-powered-by')

    const cardsRoutes = (await import('./src/routes/cardsRoutes.js')).default
    app.use('/cards', cardsRoutes)
    const newsRoutes = (await import('./src/routes/newsRoutes.js')).default
    app.use('/news', newsRoutes)
    const topSellingsRoutes = (
      await import('./src/routes/topSellingsRoutes.js')
    ).default
    app.use('/top-sellings', topSellingsRoutes)
    const recentSalesRoutes = (
      await import('./src/routes/recentSalesRoutes.js')
    ).default
    app.use('/recent-sales', recentSalesRoutes)

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}: http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Fallo al iniciar el servidor:', error)
  }
}

startServer()
