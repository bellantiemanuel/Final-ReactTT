// Formulario controlado reutilizable para crear o editar productos
// Recibe initial (datos existentes para edicion), onSubmit y onCancel
// Valida que nombre no este vacio y precio sea un numero positivo
import { useState, useRef } from 'react'

const IMGBB_API_KEY = '21afb58205f6e5ead1bc9355b38e4729'

const estadosIniciales = {
  nombre: '',
  precio: '',
  imagen: '',
  descripcion: ''
}

function ProductoForm({ initial, onSubmit, onCancel }) {
  const fileInputRef = useRef(null)
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
  const [imagenFile, setImagenFile] = useState(null)
  const [subiendo, setSubiendo] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCampos((prev) => ({ ...prev, [name]: value }))
    setErrores((prev) => ({ ...prev, [name]: '' }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImagenFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setCampos((prev) => ({ ...prev, imagen: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const subirImagen = async (file) => {
    const formData = new FormData()
    formData.append('image', file)
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    if (!data.success) throw new Error('La subida de la imagen a Imgbb falló.')
    return data.data.url
  }

  const validar = () => {
    const errs = {}
    if (!campos.nombre.trim()) errs.nombre = 'El nombre es obligatorio'
    const precioNum = Number(campos.precio)
    if (!campos.precio || Number.isNaN(precioNum) || precioNum <= 0) {
      errs.precio = 'El precio debe ser un numero mayor a 0'
    }
    if (!imagenFile && !campos.imagen) {
      errs.imagen = 'Debes seleccionar una imagen'
    }
    setErrores(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validar()) return
    setSubiendo(true)

    try {
      let urlImagen = campos.imagen
      if (imagenFile) {
        urlImagen = await subirImagen(imagenFile)
      }
      await onSubmit({
        nombre: campos.nombre.trim(),
        precio: Number(campos.precio),
        imagen: urlImagen,
        descripcion: campos.descripcion.trim()
      })
    } catch (err) {
      setErrores((prev) => ({ ...prev, imagen: err.message }))
    } finally {
      setSubiendo(false)
    }
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
        <label htmlFor="imagen">Imagen del producto</label>
        <input
          ref={fileInputRef}
          id="imagen"
          name="imagen"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {campos.imagen && !imagenFile && initial?.imagen && (
          <div className="form-preview">
            <img src={initial.imagen} alt="Vista previa" />
          </div>
        )}
        {imagenFile && (
          <div className="form-preview">
            <img src={campos.imagen} alt="Vista previa" />
          </div>
        )}
        {errores.imagen && <span className="form-error">{errores.imagen}</span>}
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
        <button className="accion-principal" type="submit" disabled={subiendo}>
          {subiendo ? 'Subiendo imagen...' : initial ? 'Guardar cambios' : 'Agregar producto'}
        </button>
        {onCancel && (
          <button className="accion-secundaria" type="button" onClick={onCancel} disabled={subiendo}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default ProductoForm
