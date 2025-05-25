import express, { json } from 'express'
import connectDb from './src/config/connectDb.js'
import { corsMiddleware } from './src/middlewares/cors.js'

const startServer = async () => {
  try {
    // Conexión a la base de datos
    await connectDb()

    // Configuración de la aplicación
    const app = express()
    /* 
      Asignación de puerto
      No se usan variables de entorno puesto que es un proyecto de pruebas. 
      En un proyecto real se usaría un archivo .env junto a .gitignore para almacenar las variables de entorno.
      También se usaría la biblioteca dotenv para cargar las variables de entorno y Joi para validar las variables de entorno y sus tipos.
    */
    const PORT = process.env.PORT ?? 3000

    // Configuración de middlewares
    app.use(corsMiddleware()) // CORS para permitir solicitudes de origen
    app.use(json()) // JSON para serializar y deserializar datos
    app.disable('x-powered-by') // Desactiva el header X-Powered-By, aumentando la seguridad

    // Rutas
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
    const recentActivitiesRoutes = (
      await import('./src/routes/recentActivitiesRoutes.js')
    ).default
    app.use('/recent-activities', recentActivitiesRoutes)

    // Ejecución de la aplicación
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}: http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Error serving application:', error)
  }
}

startServer()
