import { Sequelize } from 'sequelize'
import dbConfig from './configDb.js'

const { host, port, username, password, database, dialect } = dbConfig

const createDb = async () => {
  const tempSequelize = new Sequelize('', username, password, {
    host,
    port,
    dialect
  })

  const [results] = await tempSequelize.query(
    `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${database}'`
  )

  if (results.length === 0) {
    await tempSequelize.query(`CREATE DATABASE ${database};`)
    console.log(`Base de datos '${database}' creada correctamente`)
  }

  await tempSequelize.close()
}

export default createDb
