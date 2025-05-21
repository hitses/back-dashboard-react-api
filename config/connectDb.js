import createDb from './createDb.js'
import sequelize from './db.js'

import '../src/models/Card.js'
import '../src/models/New.js'
import '../src/models/TopSelling.js'
import '../src/models/RecentSale.js'

const connectDb = async () => {
  await createDb()

  try {
    await sequelize.authenticate()
    console.log('Conexión a la base de datos correcta')

    await sequelize.sync()
    console.log('Todas las tablas sincronizadas correctamente')
  } catch (error) {
    console.error('Error al conectar o sincronizar:', error)
    throw error
  }
}

export default connectDb
