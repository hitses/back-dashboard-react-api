import cors from 'cors'

// Configuración de orígenes permitidos (CAMBIAR O AÑADIR MÁS SI EL ENLACE DE CONEXIÓN DE FRONTEND ES DIFERENTE)
const ACCEPTED_ORIGINS = ['http://localhost:5173']

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true)
      }

      if (!origin) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  })
