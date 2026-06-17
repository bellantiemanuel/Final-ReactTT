import styles from './TarjetaProducto.module.css'

function TarjetaProducto({ nombre, precio, imagen }) {
  return (
    <div className={styles.tarjeta}>
      <img
        src={imagen}
        alt={nombre}
        className={styles.imagen}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p>{precio}</p>

        <button className={styles.boton}>
          Comprar
        </button>
      </div>
    </div>
  )
}

export default TarjetaProducto