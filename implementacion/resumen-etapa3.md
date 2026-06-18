# Etapa 3 — Búsqueda y paginación

## Requerimiento implementado

Se agregó barra de búsqueda con filtrado en tiempo real y paginador de productos en el catálogo (Paso 3 del plan).

## Archivos creados

- **`src/components/SearchBar.jsx`** — Componente de input controlado con botón para limpiar el término de búsqueda.
- **`src/components/Pagination.jsx`** — Componente de navegación con botones Anterior/Siguiente y números de página. Se oculta automáticamente cuando hay una sola página.

## Archivos modificados

- **`src/pages/Productos.jsx`** — Agrega estado `searchTerm` y `currentPage`. Renderiza `SearchBar` y pasa ambos estados a `ItemListContainer`. Al cambiar el término de búsqueda se reinicia la página a 1.
- **`src/components/ItemListContainer.jsx`** — Ahora recibe `searchTerm`, `currentPage` y `onPageChange` como props. Filtra productos por nombre (case-insensitive) con `useMemo`. Calcula páginas (8 ítems por página) y renderiza solo los productos de la página actual. Muestra mensaje cuando no hay resultados. Renderiza `Pagination` al final.
- **`src/App.css`** — Agregados estilos para `.search-bar`, `.search-clear`, `.pagination`, `.pagination-btn`, `.pagination-page` (incluyendo estado `.active`).

## Detalles técnicos

| Aspecto | Decisión |
|---|---|
| Filtrado | Client-side con `useMemo` para evitar recalcos innecesarios |
| Paginación | 8 productos por página, con reinicio a página 1 al buscar |
| Búsqueda | Case-insensitive, aplicada sobre el campo `nombre` |
| UX | Botón "X" para limpiar búsqueda; paginador oculto si hay ≤1 página |
| Estados | Loading, error, sin resultados, resultados vacíos |

## Verificación

- `npm run lint` — Sin errores.
- `npm run build` — Build exitoso (71 módulos, sin errores).
