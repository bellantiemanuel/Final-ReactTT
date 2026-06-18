// Pagina de administracion de productos (ruta protegida /admin)
// Lista todos los productos en una tabla con botones Editar/Eliminar
// Incluye formulario controlado para crear/editar y modal de confirmacion para eliminar
// Helmet: title y meta description para SEO
// react-icons: FiPlus (agregar), FiEdit2 (editar), FiTrash2 (eliminar)
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi'
import {
  getAll as getProductos,
  create as crearProducto,
  update as actualizarProducto,
  remove as eliminarProducto
} from '../firebase/productosFirestore'
import ProductoForm from '../components/ProductoForm'
import ConfirmModal from '../components/ConfirmModal'

function AdminProductos() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [editando, setEditando] = useState(null)
  const [mostrarForm, setMostrarForm] = useState(false)
  const [eliminarId, setEliminarId] = useState(null)

  // Recarga la lista de productos desde Firestore (sin reiniciar loading)
  const recargar = () => {
    getProductos()
      .then(setProductos)
      .catch((err) => setError(err.message))
  }

  // Carga inicial de productos al montar el componente
  useEffect(() => {
    getProductos()
      .then(setProductos)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  // Crea un nuevo producto y refresca la lista
  const handleCrear = async (data) => {
    try {
      await crearProducto(data)
      setMostrarForm(false)
      recargar()
    } catch (err) {
      setError(err.message)
    }
  }

  // Actualiza un producto existente y refresca la lista
  const handleEditar = async (data) => {
    try {
      await actualizarProducto(editando.id, data)
      setEditando(null)
      setMostrarForm(false)
      recargar()
    } catch (err) {
      setError(err.message)
    }
  }

  // Elimina un producto y refresca la lista
  const handleEliminar = async () => {
    try {
      await eliminarProducto(eliminarId)
      setEliminarId(null)
      recargar()
    } catch (err) {
      setError(err.message)
    }
  }

  if (cargando) {
    return <p className="catalogo-estado">Cargando productos...</p>
  }

  return (
    <section className="admin-productos">
      <Helmet>
        <title>TechStore - Administrar productos</title>
        <meta name="description" content="Panel de administración de productos de TechStore." />
      </Helmet>

      <h1>Administrar productos</h1>

      {error && <p className="mensaje-error">{error}</p>}

      <button
        className="accion-principal"
        type="button"
        onClick={() => {
          setEditando(null)
          setMostrarForm(true)
        }}
      >
        <FiPlus size={16} /> Agregar producto
      </button>

      {mostrarForm && (
        <ProductoForm
          key={editando ? editando.id : 'nuevo'}
          initial={editando}
          onSubmit={editando ? handleEditar : handleCrear}
          onCancel={() => {
            setMostrarForm(false)
            setEditando(null)
          }}
        />
      )}

      <table className="admin-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>
                <button
                  className="accion-secundaria"
                  type="button"
                  onClick={() => {
                    setEditando(p)
                    setMostrarForm(true)
                  }}
                >
                  <FiEdit2 size={14} /> Editar
                </button>
                <button
                  className="accion-peligro"
                  type="button"
                  onClick={() => setEliminarId(p.id)}
                >
                  <FiTrash2 size={14} /> Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {eliminarId && (
        <ConfirmModal
          mensaje="¿Estas seguro de eliminar este producto?"
          onConfirm={handleEliminar}
          onCancel={() => setEliminarId(null)}
        />
      )}
    </section>
  )
}

export default AdminProductos
