import { Link } from 'react-router-dom'
import useCart from '../hooks/useCart'

function CartWidget() {
  const { totalQuantity } = useCart()

  return (
    <Link className="cart-widget" to="/carrito" aria-label={`Carrito con ${totalQuantity} productos`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
      <span className="cart-widget-count">{totalQuantity}</span>
    </Link>
  )
}

export default CartWidget
