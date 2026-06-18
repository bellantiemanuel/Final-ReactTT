// Pagina del carrito de compras
// Muestra los productos agregados, totales y opciones para vaciar/quitar items
// Helmet: title y description para SEO
// react-icons: FiTrash2 (quitar/vaciar), FiShoppingBag (ver productos), FiArrowLeft (seguir comprando)
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiTrash2, FiShoppingBag, FiArrowLeft } from 'react-icons/fi'
import useCart from '../hooks/useCart'

function obtenerPrecioNumero(precio) {
  return Number(precio.replace(/[^0-9.]/g, ''))
}

function Carrito() {
  const { cartItems, clearCart, removeItem, totalQuantity } = useCart()
  const total = cartItems.reduce((sum, item) => (
    sum + obtenerPrecioNumero(item.precio) * item.cantidad
  ), 0)

  if (cartItems.length === 0) {
    return (
      <section className="carrito">
        <Helmet>
          <title>TechStore - Carrito de compras</title>
          <meta name="description" content="Tu carrito de compras en TechStore." />
        </Helmet>
        <h1>Carrito de compras</h1>
        <p>Tu carrito esta vacio por el momento.</p>
        <Link className="accion-principal" to="/productos">
          <FiShoppingBag size={16} /> Ver productos
        </Link>
      </section>
    )
  }

  return (
    <section className="carrito">
      <Helmet>
        <title>TechStore - Carrito de compras</title>
        <meta name="description" content="Revisa los productos en tu carrito de TechStore." />
      </Helmet>
      <h1>Carrito de compras</h1>
      <p>Productos agregados: {totalQuantity}</p>

      <div className="carrito-lista">
        {cartItems.map((item) => (
          <article className="carrito-item" key={item.id}>
            <img src={item.imagen} alt={item.nombre} />

            <div className="carrito-item-info">
              <h2>{item.nombre}</h2>
              <p>Precio unitario: {item.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p>Subtotal: ${obtenerPrecioNumero(item.precio) * item.cantidad}</p>
            </div>

            <button
              className="accion-secundaria"
              type="button"
              onClick={() => removeItem(item.id)}
            >
              <FiTrash2 size={16} /> Quitar
            </button>
          </article>
        ))}
      </div>

      <div className="carrito-resumen">
        <h2>Total: ${total}</h2>
        <div className="detalle-acciones">
          <Link className="accion-secundaria" to="/productos">
            <FiArrowLeft size={16} /> Seguir comprando
          </Link>
          <button className="accion-principal" type="button" onClick={clearCart}>
            <FiTrash2 size={16} /> Vaciar carrito
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carrito
