// Componente que protege rutas privadas
// Mientras Firebase verifica la sesion muestra "Verificando sesion..."
// Si no hay usuario autenticado redirige a /login
// Si hay usuario renderiza el contenido hijo normally
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function ProtectedRoute({ children }) {
  const { user, cargando } = useAuth()

  if (cargando) {
    return <p className="catalogo-estado">Verificando sesion...</p>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
