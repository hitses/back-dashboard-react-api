import { Sequelize } from 'sequelize'
import dbConfig from './configDb.js'

const { host, port, username, password, database, dialect } = dbConfig

// Se crea una instancia de Sequelize con la configuración de la base de datos existente
const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect
})

export default sequelize
