// Contenedor que obtiene y muestra todos los productos desde Firestore
// Maneja estados de carga, error y renderiza una grilla de Items
import { useEffect, useState } from 'react'
import Item from './Item'
import { getAll } from '../firebase/productosFirestore'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  // Obtiene productos desde Firestore al montar el componente
  useEffect(() => {
    getAll()
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) {
    return <p className="catalogo-estado">Cargando productos...</p>
  }

  if (error) {
    return <p className="catalogo-estado">{error}</p>
  }

  return (
    <section className="catalogo" aria-label="Catalogo de productos">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
        />
      ))}
    </section>
  )
}

export default ItemListContainer
