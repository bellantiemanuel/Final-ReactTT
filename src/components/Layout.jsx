import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CartWidget from './CartWidget'

function Layout({ children }) {
  return (
    <>
      <Header />
      <nav className="main-nav" aria-label="Navegacion principal">
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><CartWidget /></li>
        </ul>
      </nav>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
