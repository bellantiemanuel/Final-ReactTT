// Formulario controlado reutilizable para crear o editar productos
// Recibe initial (datos existentes para edicion), onSubmit y onCancel
// Valida que nombre no este vacio y precio sea un numero positivo
import { useState } from 'react'

const estadosIniciales = {
  nombre: '',
  precio: '',
  imagen: '',
  descripcion: ''
}

function ProductoForm({ initial, onSubmit, onCancel }) {
  // Toma el estado inicial del producto a editar, o vacio si es creacion
  const estadoInicial = initial
    ? {
        nombre: initial.nombre || '',
        precio: initial.precio ?? '',
        imagen: initial.imagen || '',
        descripcion: initial.descripcion || ''
      }
    : estadosIniciales

  const [campos, setCampos] = useState(estadoInicial)
  const [errores, setErrores] = useState({})

  // Actualiza el campo modificado y limpia su error asociado
  const handleChange = (e) => {
    const { name, value } = e.target
    setCampos((prev) => ({ ...prev, [name]: value }))
    setErrores((prev) => ({ ...prev, [name]: '' }))
  }

  // Valida los campos antes de enviar
  const validar = () => {
    const errs = {}
    if (!campos.nombre.trim()) errs.nombre = 'El nombre es obligatorio'
    const precioNum = Number(campos.precio)
    if (!campos.precio || Number.isNaN(precioNum) || precioNum <= 0) {
      errs.precio = 'El precio debe ser un numero mayor a 0'
    }
    setErrores(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validar()) return
    onSubmit({
      nombre: campos.nombre.trim(),
      precio: Number(campos.precio),
      imagen: campos.imagen.trim(),
      descripcion: campos.descripcion.trim()
    })
  }

  return (
    <form className="producto-form" onSubmit={handleSubmit} noValidate>
      <div className="form-campo">
        <label htmlFor="nombre">Nombre *</label>
        <input
          id="nombre"
          name="nombre"
          value={campos.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <span className="form-error">{errores.nombre}</span>}
      </div>

      <div className="form-campo">
        <label htmlFor="precio">Precio *</label>
        <input
          id="precio"
          name="precio"
          type="number"
          step="0.01"
          value={campos.precio}
          onChange={handleChange}
        />
        {errores.precio && <span className="form-error">{errores.precio}</span>}
      </div>

      <div className="form-campo">
        <label htmlFor="imagen">URL de imagen</label>
        <input
          id="imagen"
          name="imagen"
          value={campos.imagen}
          onChange={handleChange}
        />
      </div>

      <div className="form-campo">
        <label htmlFor="descripcion">Descripcion</label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows="3"
          value={campos.descripcion}
          onChange={handleChange}
        />
      </div>

      <div className="form-acciones">
        <button className="accion-principal" type="submit">
          {initial ? 'Guardar cambios' : 'Agregar producto'}
        </button>
        {onCancel && (
          <button className="accion-secundaria" type="button" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default ProductoForm
