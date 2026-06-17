import { Link } from 'react-router-dom'
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
        <h1>Carrito de compras</h1>
        <p>Tu carrito esta vacio por el momento.</p>
        <Link className="accion-principal" to="/productos">
          Ver productos
        </Link>
      </section>
    )
  }

  return (
    <section className="carrito">
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
              Quitar
            </button>
          </article>
        ))}
      </div>

      <div className="carrito-resumen">
        <h2>Total: ${total}</h2>
        <div className="detalle-acciones">
          <Link className="accion-secundaria" to="/productos">Seguir comprando</Link>
          <button className="accion-principal" type="button" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>
      </div>
    </section>
  )
}

export default Carrito
