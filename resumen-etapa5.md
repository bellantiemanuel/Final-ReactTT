# Resumen Etapa 5 — Refactor y limpieza

## Requerimiento implementado

Refactorización y limpieza del código: eliminación de hardcodeo, componentes muertos, y optimización general (Paso 5 del plan).

## Archivos modificados

### `src/components/Footer.jsx`
- **Eliminado** el array `equipo` hardcodeado con los 3 miembros del equipo
- **Agregada** carga dinámica desde `/data/nosotros.json` usando `fetch` + `useEffect`
- Ahora incluye a **Ana** (Community Manager) que estaba en el JSON pero faltaba en el footer hardcodeado
- Cambiado `Col md={4}` a `Col md={3}` para mostrar 4 columnas con los 4 miembros
- La sección de equipo solo se renderiza si hay datos (`equipo.length > 0`)

### `src/components/TarjetaProducto.jsx` — **ELIMINADO**
- Componente no utilizado en ningún lado del proyecto
- Su CSS module (`TarjetaProducto.module.css`) se conserva porque es importado por `Item.jsx` y `ProductosDestacados.jsx`

### `src/context/CartContext.js`
- Agregado header comment explicando su rol (similar al que ya tenía `AuthContext.js`)

### `src/context/CartProvider.jsx`
- Agregado header comment con las funciones expuestas
- Agregados comentarios inline en `addItem`, `removeItem`, `clearCart`, `totalQuantity` y `useMemo`

## Archivos no modificados (verificados, sin cambios necesarios)

| Archivo | Resultado |
|---|---|
| `App.jsx` | Sin imports muertos |
| `App.css` | Todas las clases tienen uso en componentes |
| `pages/*` | Sin imports muertos |
| `components/*` | Sin imports muertos |
| `hooks/*` | Sin imports muertos |
| `context/AuthContext.js` | Ya tenía comentarios |
| `context/AuthProvider.jsx` | Ya tenía comentarios |
| `firebase/*` | Ya tenía comentarios |

## Detalles técnicos

| Aspecto | Decisión |
|---|---|
| Carga del equipo | `fetch` sobre `/data/nosotros.json` (archivo público) |
| Manejo de error | Si falla la carga, equipo queda vacío y no se renderiza la sección |
| Componente eliminado | `TarjetaProducto.jsx` — no se importaba en ningún archivo |
| CSS module | `TarjetaProducto.module.css` se conserva (lo usan 2 componentes) |

## Verificación

- `npm run lint` — Sin errores
- `npm run build` — Build exitoso (390 módulos)
