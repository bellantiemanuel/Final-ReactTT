import { Link } from 'react-router-dom'
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
            Ver detalle
          </Link>
          <button className={styles.boton} type="button" onClick={() => addItem(producto)}>
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Item
