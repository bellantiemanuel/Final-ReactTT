// Barra de busqueda con input controlado y boton para limpiar el termino
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Buscar productos"
      />
      {/* Boton "X" que solo aparece cuando hay texto ingresado */}
      {searchTerm && (
        <button
          className="search-clear"
          type="button"
          onClick={() => setSearchTerm('')}
          aria-label="Limpiar busqueda"
        >
          &times;
        </button>
      )}
    </div>
  )
}

export default SearchBar
