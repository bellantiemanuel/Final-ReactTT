// Header principal con logo, navegacion y controles de autenticacion
// Si el usuario esta logueado muestra su nombre + enlace a Admin + boton cerrar sesion
// Si no, muestra un enlace a la pagina de login
// Los iconos (FiPackage, FiSettings, FiLogIn, FiLogOut) vienen de react-icons
import { Link } from 'react-router-dom'
import { FiPackage, FiSettings, FiLogIn, FiLogOut } from 'react-icons/fi'
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

      <nav className="header-nav">
        <Link className="header-btn" to="/productos">
          <FiPackage size={16} /> Productos
        </Link>
        {user && (
          <Link className="header-btn" to="/admin">
            <FiSettings size={16} /> Admin
          </Link>
        )}
      </nav>

      <div className="header-auth">
        {user ? (
          <>
            <span className="header-user">{user.displayName || user.email}</span>
            <button className="header-btn" type="button" onClick={logout}>
              <FiLogOut size={16} /> Cerrar sesion
            </button>
          </>
        ) : (
          <Link className="header-btn" to="/login">
            <FiLogIn size={16} /> Iniciar sesion
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
