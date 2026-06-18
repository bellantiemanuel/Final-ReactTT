// Modal de confirmacion para acciones destructivas (eliminar producto)
// Se cierra al hacer clic fuera del contenido (onClick en overlay)
// Recibe: mensaje, onConfirm (accion si confirma), onCancel (accion si cancela)
function ConfirmModal({ mensaje, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <p>{mensaje}</p>
        <div className="modal-acciones">
          <button className="accion-principal" type="button" onClick={onConfirm}>
            Eliminar
          </button>
          <button className="accion-secundaria" type="button" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
