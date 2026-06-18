// Boton para cargar productos de ejemplo en Firestore
// Solo visible en la pagina de administracion para usuarios autenticados
// Muestra estados de carga y resultado de la operacion
// Al completar llama a onComplete() para refrescar la lista de productos
import { useState } from 'react'
import { create } from '../firebase/productosFirestore'
import seedProductos from '../data/seedProductos'

function SeedButton({ onComplete }) {
  const [cargando, setCargando] = useState(false)
  const [resultado, setResultado] = useState(null)

  const handleSeed = async () => {
    if (!confirm('¿Cargar productos de ejemplo en la base de datos?')) return

    setCargando(true)
    setResultado(null)

    try {
      let insertados = 0
      for (const producto of seedProductos) {
        await create(producto)
        insertados++
      }
      setResultado({ tipo: 'exito', mensaje: `${insertados} productos cargados correctamente.` })
      if (onComplete) onComplete()
    } catch (err) {
      setResultado({ tipo: 'error', mensaje: 'Error al cargar productos: ' + err.message })
    } finally {
      setCargando(false)
    }
  }

  return (
    <div style={{ marginTop: 16 }}>
      <button
        className="accion-secundaria"
        type="button"
        onClick={handleSeed}
        disabled={cargando}
      >
        {cargando ? 'Cargando...' : 'Cargar productos de ejemplo'}
      </button>
      {resultado && (
        <p style={{
          marginTop: 8,
          color: resultado.tipo === 'exito' ? '#059669' : '#dc2626',
          fontWeight: 'bold'
        }}>
          {resultado.mensaje}
        </p>
      )}
    </div>
  )
}

export default SeedButton
