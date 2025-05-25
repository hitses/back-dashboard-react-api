// Configuración de conexión a la base de datos
const dbConfig = {
  host: 'localhost', // Dirección IP o nombre de host
  port: 3306, // Puerto de conexión
  username: 'root', // Nombre de usuario (CAMBIAR EN CASO DE CAMBIO CUENTA)
  password: '', // Contraseña (CAMBIAR EN CASO DE CAMBIO CUENTA)
  database: 'apartments_jero', // Nombre de la base de datos
  dialect: 'mysql' // Tipo de base de datos (usado por Sequelize)
}

export default dbConfig
