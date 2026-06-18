// Widget del carrito en la navegacion
// Muestra un icono de carrito (FiShoppingCart de react-icons) con el contador de productos
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import useCart from '../hooks/useCart'

function CartWidget() {
  const { totalQuantity } = useCart()

  return (
    <Link className="cart-widget" to="/carrito" aria-label={`Carrito con ${totalQuantity} productos`}>
      <FiShoppingCart size={22} />
      <span className="cart-widget-count">{totalQuantity}</span>
    </Link>
  )
}

export default CartWidget
