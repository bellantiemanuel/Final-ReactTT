// Contexto que almacena y distribuye el estado de autenticacion
// AuthProvider (AuthProvider.jsx) es quien provee los valores
// useAuth (hooks/useAuth.js) es quien lo consume
import { createContext } from 'react'

const AuthContext = createContext()

export default AuthContext
