// Tarjeta individual de producto en el catalogo
// Muestra imagen, nombre, precio y botones de accion con iconos react-icons
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiEye } from 'react-icons/fi'
import useCart from '../hooks/useCart'
import styles from './TarjetaProducto.module.css'

function Item({ id, nombre, precio, imagen }) {
  const { addItem } = useCart()
  const producto = { id, nombre, precio, imagen }
  const [showTooltip, setShowTooltip] = useState(false)

  const handleAdd = () => {
    addItem(producto)
    setShowTooltip(true)
    setTimeout(() => setShowTooltip(false), 2000)
  }

  return (
    <article className={styles.tarjeta}>
      <img
        src={imagen}
        alt={nombre}
        className={styles.imagen}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p>{typeof precio === 'number' ? `$${precio}` : precio}</p>

        <div className={styles.acciones}>
          <Link className={styles.botonSecundario} to={`/producto/${id}`}>
            <FiEye size={14} /> Ver detalle
          </Link>
          <div className={styles.botonWrapper}>
            <button className={styles.boton} type="button" onClick={handleAdd}>
              <FiShoppingCart size={14} /> Agregar
            </button>
            {showTooltip && (
              <span className={styles.tooltip}>Producto agregado</span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Item
