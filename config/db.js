import { Sequelize } from 'sequelize'
import dbConfig from './configDb.js'

const { host, port, username, password, database, dialect } = dbConfig

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect
})

export default sequelize
