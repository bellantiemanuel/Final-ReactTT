// Tarjeta individual de producto en el catalogo
// Muestra imagen, nombre, precio y botones de accion con iconos react-icons
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiEye } from 'react-icons/fi'
import useCart from '../hooks/useCart'
import styles from './TarjetaProducto.module.css'

function Item({ id, nombre, precio, imagen }) {
  const { addItem } = useCart()
  const producto = { id, nombre, precio, imagen }

  return (
    <article className={styles.tarjeta}>
      <img
        src={imagen}
        alt={nombre}
        className={styles.imagen}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p>{precio}</p>

        <div className={styles.acciones}>
          <Link className={styles.botonSecundario} to={`/producto/${id}`}>
            <FiEye size={14} /> Ver detalle
          </Link>
          <button className={styles.boton} type="button" onClick={() => addItem(producto)}>
            <FiShoppingCart size={14} /> Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Item
