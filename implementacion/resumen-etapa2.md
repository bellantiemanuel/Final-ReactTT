# Etapa 2 - CRUD de productos con Firebase Firestore

## Implementado

### Firestore
- Colección `productos` creada en Firebase Firestore
- `src/firebase/config.js` — Agregada exportación de `db` (getFirestore)
- `src/firebase/productosFirestore.js` — Servicio CRUD con funciones:
  - `getAll()` — Obtiene todos los productos ordenados por nombre
  - `getById(id)` — Obtiene un producto por su ID
  - `create(data)` — Agrega un nuevo producto
  - `update(id, data)` — Actualiza un producto existente
  - `remove(id)` — Elimina un producto

### Migración de catálogo a Firestore
- `src/components/ItemListContainer.jsx` — Ahora lee productos desde Firestore (antes desde JSON local)
- `src/pages/ProductoDetalle.jsx` — Ahora obtiene el producto desde Firestore por ID
  - Muestra la descripción guardada en la base de datos
  - Formatea precio numérico con símbolo $

### Panel de administración
- `src/pages/AdminProductos.jsx` — Página protegida (`/admin`) con:
  - Tabla con listado de productos (nombre, precio, acciones)
  - Botón "Agregar producto" que muestra el formulario
  - Botones "Editar" que precargan el formulario con datos existentes
  - Botones "Eliminar" que abren modal de confirmación
  - Recarga automática de la lista después de crear, editar o eliminar

### Formulario controlado
- `src/components/ProductoForm.jsx` — Formulario reutilizable con:
  - Campos: nombre, precio, URL de imagen, descripción
  - Validaciones: nombre obligatorio, precio debe ser número positivo
  - Mensajes de error por campo
  - Adaptación automática entre crear y editar (texto del botón cambia)
  - Botón "Cancelar" para cerrar el formulario

### Modal de confirmación
- `src/components/ConfirmModal.jsx` — Modal para confirmar eliminación:
  - Fondo oscuro overlay
  - Cierre al hacer clic fuera del contenido
  - Botones "Eliminar" y "Cancelar"

### Integración en la app
- `src/App.jsx` — Ruta `/admin` agregada con ProtectedRoute
- `src/components/Header.jsx` — Enlace a "Admin" visible solo para usuarios autenticados
- `src/App.css` — Estilos para admin, tabla, formulario, modal y navegación

## Próximo paso
Paso 3: Búsqueda y paginación
