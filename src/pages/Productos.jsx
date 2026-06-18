// Pagina de catalogo con barra de busqueda y paginacion
// El estado de busqueda y pagina se maneja aca y se pasa a los hijos
// Helmet define el title y meta description para SEO en esta pagina
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import SearchBar from '../components/SearchBar'
import ItemListContainer from '../components/ItemListContainer'

function Productos() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Al cambiar el termino de busqueda se reinicia a la pagina 1
  const handleSetSearchTerm = (term) => {
    setSearchTerm(term)
    setCurrentPage(1)
  }

  return (
    <>
      <Helmet>
        <title>TechStore - Productos</title>
        <meta name="description" content="Explora nuestro catálogo de productos tecnológicos en TechStore." />
      </Helmet>

      <section className="page-header">
        <h1>Productos</h1>
        <p>Explora nuestro catalogo disponible.</p>
      </section>

      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSetSearchTerm} />
      <ItemListContainer
        searchTerm={searchTerm}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  )
}

export default Productos
