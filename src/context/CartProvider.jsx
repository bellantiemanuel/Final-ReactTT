import { useMemo, useState } from 'react'
import CartContext from './CartContext'

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addItem = (producto) => {
    setCartItems((itemsActuales) => {
      const itemExistente = itemsActuales.find((item) => item.id === producto.id)

      if (itemExistente) {
        return itemsActuales.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      }

      return [...itemsActuales, { ...producto, cantidad: 1 }]
    })
  }

  const removeItem = (id) => {
    setCartItems((itemsActuales) => itemsActuales.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const totalQuantity = cartItems.reduce((total, item) => total + item.cantidad, 0)

  const value = useMemo(() => ({
    cartItems,
    addItem,
    removeItem,
    clearCart,
    totalQuantity
  }), [cartItems, totalQuantity])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
