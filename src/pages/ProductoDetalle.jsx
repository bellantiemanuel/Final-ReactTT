import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCart from '../hooks/useCart'

function ProductoDetalle() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar el producto')
        }

        return respuesta.json()
      })
      .then((productos) => {
        const productoEncontrado = productos.find((item) => String(item.id) === id)

        if (!productoEncontrado) {
          throw new Error('Producto no encontrado')
        }

        setProducto(productoEncontrado)
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

  return (
    <section className="producto-detalle">
      <img src={producto.imagen} alt={producto.nombre} />

      <div className="producto-detalle-info">
        <p className="producto-id">Producto #{producto.id}</p>
        <h1>{producto.nombre}</h1>
        <p className="producto-precio">{producto.precio}</p>
        <p>
          Producto seleccionado del catalogo de TechStore. Ideal para mejorar tu
          setup con accesorios confiables y de buen rendimiento.
        </p>

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
