// Vista de detalle de un producto individual
// Obtiene el producto desde Firestore por el ID de la URL
// Permite agregarlo al carrito con el boton correspondiente
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCart from '../hooks/useCart'
import { getById } from '../firebase/productosFirestore'

function ProductoDetalle() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('')

  // Obtiene el producto desde Firestore cada vez que cambia el ID
  useEffect(() => {
    getById(id)
      .then((data) => {
        if (!data) throw new Error('Producto no encontrado')
        setProducto(data)
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) {
    return <p className="catalogo-estado">Cargando producto...</p>
  }

  if (error) {
    return <p className="catalogo-estado">{error}</p>
  }

  const handleAgregar = () => {
    addItem(producto)
    setMensaje('Producto agregado al carrito')
  }

  const precioMostrar = typeof producto.precio === 'number'
    ? `$${producto.precio}`
    : producto.precio

  return (
    <section className="producto-detalle">
      <img src={producto.imagen} alt={producto.nombre} />

      <div className="producto-detalle-info">
        <p className="producto-id">Producto #{producto.id}</p>
        <h1>{producto.nombre}</h1>
        <p className="producto-precio">{precioMostrar}</p>
        <p>{producto.descripcion || 'Producto seleccionado del catalogo de TechStore.'}</p>

        <div className="detalle-acciones">
          <button className="accion-principal" type="button" onClick={handleAgregar}>
            Agregar al carrito
          </button>
          <Link className="accion-secundaria" to="/productos">Volver al catalogo</Link>
        </div>
        {mensaje && <p className="producto-mensaje">{mensaje}</p>}
      </div>
    </section>
  )
}

export default ProductoDetalle
