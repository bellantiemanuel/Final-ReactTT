// Layout principal que envuelve todas las paginas
// Header y Footer se renderizan siempre
// El contenido principal se centra con Container de react-bootstrap
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
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
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
