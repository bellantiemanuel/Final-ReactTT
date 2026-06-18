// Contenedor que obtiene productos desde Firestore, filtra por busqueda
// y pagina los resultados antes de renderizar la grilla de Items
import { useEffect, useState, useMemo } from 'react'
import Item from './Item'
import Pagination from './Pagination'
import { getAll } from '../firebase/productosFirestore'

const ITEMS_PER_PAGE = 8

function ItemListContainer({ searchTerm, currentPage, onPageChange }) {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  // Carga completa de productos desde Firestore al montar el componente
  useEffect(() => {
    getAll()
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  // Filtrado client-side por nombre (case-insensitive) usando useMemo
  // para evitar recalculos innecesarios en cada render
  const filtered = useMemo(() => {
    if (!searchTerm) return productos
    const term = searchTerm.toLowerCase()
    return productos.filter((p) => p.nombre.toLowerCase().includes(term))
  }, [productos, searchTerm])

  // Calculo de paginas y productos visibles en la pagina actual
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filtered.slice(start, start + ITEMS_PER_PAGE)
  }, [filtered, currentPage])

  if (cargando) {
    return <p className="catalogo-estado">Cargando productos...</p>
  }

  if (error) {
    return <p className="catalogo-estado">{error}</p>
  }

  if (filtered.length === 0) {
    return (
      <>
        <p className="catalogo-estado">No se encontraron productos que coincidan con tu busqueda.</p>
      </>
    )
  }

  return (
    <>
      <section className="catalogo" aria-label="Catalogo de productos">
        {paginated.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  )
}

export default ItemListContainer
