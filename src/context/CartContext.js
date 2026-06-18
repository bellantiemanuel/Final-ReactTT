// Contexto que almacena y distribuye el estado del carrito de compras
// CartProvider (CartProvider.jsx) es quien provee los valores
// useCart (hooks/useCart.js) es quien lo consume
import { createContext } from 'react'

const CartContext = createContext()

export default CartContext
