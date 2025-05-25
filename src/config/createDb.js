import { Sequelize } from 'sequelize'
import dbConfig from './configDb.js'

const { host, port, username, password, database, dialect } = dbConfig

const createDb = async () => {
  // Se crea una instancia de Sequelize sin una base de datos establecida para poder relizar consultas
  const tempSequelize = new Sequelize('', username, password, {
    host,
    port,
    dialect
  })

  // Se realiza una consulta a la base de datos para verificar si la base de datos existe
  const [results] = await tempSequelize.query(
    `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${database}'`
  )

  // Si la base de datos no existe, se crea
  if (results.length === 0) {
    await tempSequelize.query(`CREATE DATABASE ${database};`)

    console.log(`Data base ${database} has been created successfully`)
  }

  await tempSequelize.close()
}

export default createDb
