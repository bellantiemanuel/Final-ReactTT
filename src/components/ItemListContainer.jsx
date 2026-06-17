import { useEffect, useState } from 'react'
import Item from './Item'

function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los productos')
        }

        return respuesta.json()
      })
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
