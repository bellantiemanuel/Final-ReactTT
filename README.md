# TechStore - eCommerce (Entrega Final)

Proyecto final del curso de React - TalentoTech. Aplicación eCommerce desarrollada con React + Vite.

## Estado actual del proyecto

### Ya implementado
- Estructura base con Vite + React 19
- Routing con react-router-dom (Inicio, Productos, ProductoDetalle, Carrito)
- CartContext + CartProvider con Context API (agregar, eliminar, vaciar carrito)
- Hook personalizado `useCart`
- Componentes: Header, Footer, Layout, CartWidget, ItemListContainer, Item, TarjetaProducto
- CSS Modules para TarjetaProducto
- Catálogo de productos desde JSON local
- Vista de detalle de producto
- Carrito funcional con resumen de totales
- Página de inicio con hero section y catálogo
- Footer con información del equipo (hardcodeado en componente)

### Por implementar / mejorar
- Autenticación de usuarios (AuthContext, Firebase Auth, login/registro)
- Protección de rutas privadas
- CRUD de productos con Firebase Firestore
- Formulario controlado para agregar/editar productos con validaciones
- Modal de confirmación para eliminar productos
- Integrar React-Bootstrap para diseño responsivo (sistema de grillas)
- Migrar a styled-components (CSS-in-JS modular)
- Agregar React Icons en botones y elementos interactivos
- Implementar React Helmet para SEO (title/meta dinámicos)
- Barra de búsqueda con filtrado en tiempo real
- Paginador de productos
- Cargar equipo desde `nosotros.json` en lugar de hardcodeado
- TarjetaProducto.jsx no se usa actualmente (revisar si integrar o eliminar)
- README actualizado con instrucciones de instalación y ejecución
- Limpieza y optimización de código

---

## Plan de implementación paso a paso

### Paso 1: Autenticación de usuarios (Requerimiento #1)
- Instalar Firebase (`firebase`)
- Crear configuración de Firebase (`src/firebase/config.js`)
- Crear `AuthContext.js` y `AuthProvider.jsx` en `src/context/`
- Implementar formularios de Login y Registro (`src/pages/Login.jsx`, `src/pages/Register.jsx`)
- Crear hook personalizado `useAuth.js` en `src/hooks/`
- Implementar componente `ProtectedRoute.jsx` para proteger rutas
- Agregar rutas protegidas en `App.jsx`
- Agregar enlace de Login/Registro y nombre de usuario en Header

### Paso 2: CRUD de productos con Firebase (Requerimiento #2)
- Crear colección `productos` en Firebase Firestore
- Modificar `ItemListContainer.jsx` para leer desde Firestore (con loading/error states)
- Crear `src/pages/AdminProductos.jsx` (ruta protegida) con:
  - Formulario controlado para agregar producto (nombre obligatorio, precio > 0, validaciones)
  - Tabla/listado de productos con botones editar/eliminar
  - Modal de confirmación antes de eliminar
  - Estados de carga (spinner) y mensajes de error
- Crear `src/components/ProductoForm.jsx` (formulario reutilizable)
- Crear `src/components/ConfirmModal.jsx` para confirmación de eliminación

### Paso 3: Búsqueda y paginación (Requerimiento #4)
- Agregar barra de búsqueda en página de Productos
- Filtrar productos en tiempo real mientras el usuario escribe
- Implementar paginador en el catálogo (X productos por página)
- Crear `src/components/SearchBar.jsx` y `src/components/Pagination.jsx`

### Paso 4: Diseño responsivo con React-Bootstrap (Requerimiento #3)
- Instalar `react-bootstrap` y `bootstrap`
- Adaptar Layout y sistema de grillas usando componentes de Bootstrap
- Migrar estilos a styled-components progresivamente
- Agregar React Icons (`react-icons`) en botones e interacciones
- Reemplazar SVG inline de CartWidget con icono de React Icons
- Implementar React Helmet (`react-helmet-async`) para title/meta dinámicos
- Agregar Helmet en cada página con título y descripción únicos

### Paso 5: Refactor y limpieza
- Eliminar hardcodeo del equipo en Footer.jsx, cargar desde `nosotros.json`
- Evaluar si TarjetaProducto.jsx se integra o se elimina
- Unificar estilos redundantes, eliminar CSS no usado
- Optimizar imports y código muerto

### Paso 6: Documentación y preparación para despliegue (Requerimiento #5)
- Verificar funcionamiento en navegadores
- Actualizar README con instrucciones completas:
  - Requisitos previos
  - Instalación
  - Configuración de Firebase (variables de entorno)
  - Comandos disponibles
  - Estructura del proyecto
- Probar build de producción (`npm run build`)
- Ejecutar lint (`npm run lint`)

---

## Dependencias a instalar

```bash
npm install firebase react-bootstrap bootstrap styled-components react-icons react-helmet-async
```

## Scripts disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build de producción
npm run lint     # Ejecutar ESLint
npm run preview  # Vista previa del build
```
# Final-ReactTT
