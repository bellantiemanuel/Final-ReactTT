// Proveedor del contexto del carrito de compras
// Expone: cartItems, addItem, removeItem, clearCart, totalQuantity
// addItem incrementa cantidad si el producto ya existe en el carrito
import { useMemo, useState } from 'react'
import CartContext from './CartContext'

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Agrega un producto al carrito; si ya existe incrementa su cantidad
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

  // Elimina un producto del carrito por su ID
  const removeItem = (id) => {
    setCartItems((itemsActuales) => itemsActuales.filter((item) => item.id !== id))
  }

  // Vacia el carrito por completo
  const clearCart = () => {
    setCartItems([])
  }

  // Calcula la cantidad total de productos en el carrito
  const totalQuantity = cartItems.reduce((total, item) => total + item.cantidad, 0)

  // Memoriza el valor del contexto para evitar renders innecesarios
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
