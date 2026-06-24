// Vista de detalle de un producto individual
// Obtiene el producto desde Firestore por el ID de la URL
// Permite agregarlo al carrito con el boton correspondiente
// Helmet: title dinamico con el nombre del producto para SEO
// react-icons: FiShoppingCart (agregar), FiArrowLeft (volver)
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { FiShoppingCart, FiArrowLeft } from 'react-icons/fi'
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
    <>
      <Helmet>
        <title>TechStore - {producto.nombre}</title>
        <meta name="description" content={`${producto.nombre} en TechStore - ${producto.descripcion || 'Producto seleccionado del catálogo.'}`} />
      </Helmet>

      <section className="producto-detalle">
      <img src={producto.imagen} alt={producto.nombre} />

      <div className="producto-detalle-info">
        <h1>{producto.nombre}</h1>
        <p className="producto-precio">{precioMostrar}</p>
        <p>{producto.descripcion || 'Producto seleccionado del catalogo de TechStore.'}</p>

        <div className="detalle-acciones">
          <button className="accion-principal" type="button" onClick={handleAgregar}>
            <FiShoppingCart size={16} /> Agregar al carrito
          </button>
          <Link className="accion-secundaria" to="/productos">
            <FiArrowLeft size={16} /> Volver al catalogo
          </Link>
        </div>
        {mensaje && <p className="producto-mensaje">{mensaje}</p>}
      </div>
    </section>
    </>
  )
}

export default ProductoDetalle
