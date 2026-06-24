// Seccion de productos destacados (Hot Sale) en la pagina de inicio
// Filtra productos con destacado: true desde Firestore y los muestra con un badge
// Si no hay productos destacados o hay error, no renderiza nada
// Cada tarjeta tiene dos botones: "Ver detalle" (Link a /producto/:id) y "Agregar al carrito" (addItem de useCart)
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiEye } from 'react-icons/fi'
import useCart from '../hooks/useCart'
import { getAll } from '../firebase/productosFirestore'
import styles from './TarjetaProducto.module.css'

function ProductosDestacados() {
  const { addItem } = useCart()
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [tooltipId, setTooltipId] = useState(null)

  useEffect(() => {
    getAll()
      .then((data) => setProductos(data.filter((p) => p.destacado)))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  if (cargando) {
    return <p className="catalogo-estado">Cargando destacados...</p>
  }

  if (error || productos.length === 0) {
    return null
  }

  return (
    <section className="destacados">
      <h2 className="destacados-titulo">🔥 Hot Sale</h2>
      <p className="destacados-subtitulo">Productos destacados con los mejores precios</p>

      <div className="destacados-grid">
        {productos.map((producto) => (
          <article className={styles.tarjeta} key={producto.id}>
            <div className="destacados-badge">Hot Sale</div>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className={styles.imagen}
            />
            <div className={styles.contenido}>
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>

              <div className={styles.acciones}>
                <Link className={styles.botonSecundario} to={`/producto/${producto.id}`}>
                  <FiEye size={14} /> Ver detalle
                </Link>
                <div className={styles.botonWrapper}>
                  <button className={styles.boton} type="button" onClick={() => {
                    addItem(producto)
                    setTooltipId(producto.id)
                    setTimeout(() => setTooltipId(null), 2000)
                  }}>
                    <FiShoppingCart size={14} /> Agregar al carrito
                  </button>
                  {tooltipId === producto.id && (
                    <span className={styles.tooltip}>Producto agregado</span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductosDestacados
