// Pagina de inicio con hero section, productos destacados (Hot Sale) arriba y catalogo completo abajo
// Helmet define el title y meta description para SEO
import { Helmet } from 'react-helmet-async'
import ItemListContainer from '../components/ItemListContainer'
import ProductosDestacados from '../components/ProductosDestacados'

function Inicio() {
  return (
    <>
      <Helmet>
        <title>TechStore - Inicio</title>
        <meta name="description" content="TechStore - Los mejores productos tecnológicos para hogares, estudiantes y profesionales." />
      </Helmet>

      <section className="hero">
        <h1>TechStore</h1>
        <p>Los mejores productos tecnológicos</p>
      </section>

      <ProductosDestacados />
      <ItemListContainer />
    </>
  )
}

export default Inicio
