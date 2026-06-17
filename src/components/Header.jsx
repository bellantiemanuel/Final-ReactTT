// Header principal con logo y controles de autenticacion
// Si el usuario esta logueado muestra su nombre + boton de cerrar sesion
// Si no, muestra un enlace a la pagina de login
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h2>TechStore</h2>
          <p>Equipamiento tecnologico para todos los dias</p>
        </Link>
      </div>

      <div className="header-auth">
        {user ? (
          <>
            <span className="header-user">{user.displayName || user.email}</span>
            <button className="header-btn" type="button" onClick={logout}>
              Cerrar sesion
            </button>
          </>
        ) : (
          <Link className="header-btn" to="/login">Iniciar sesion</Link>
        )}
      </div>
    </header>
  )
}

export default Header
