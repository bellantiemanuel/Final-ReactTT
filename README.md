# TechStore - eCommerce

Aplicación eCommerce desarrollada con **React 19 + Vite**, con autenticación de usuarios, catálogo de productos con Firebase Firestore, carrito de compras, búsqueda y paginación, diseño responsivo con Bootstrap y SEO con React Helmet.

## Requisitos previos

- **Node.js** >= 18
- **npm** >= 9
- Una cuenta en **Firebase** (para Authentication y Firestore)

## Instalacion

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd react-tt

# Instalar dependencias
npm install
```

## Configuración de Firebase

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com)
2. Habilitar **Authentication** → Sign-in method → Email/Password
3. Crear una base de datos **Firestore** en modo prueba
4. En la configuracion del proyecto, copiar las credenciales de la web app

### Variables de entorno

Renombrar `.env.example` a `.env` y completar los valores:

```env
VITE_FIREBASE_API_KEY=tu-api-key
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-project-id
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=tu-sender-id
VITE_FIREBASE_APP_ID=tu-app-id
```

> Si no se crea el archivo `.env`, la app usa por defecto las credenciales del proyecto `react-tt` existente.

### Reglas de Firestore (desarrollo)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

> En produccion, restringir las reglas usando autenticación.

### Poblar la base de datos

1. Iniciar sesion en la app (registrarse o loguearse)
2. Ir a `/admin` (ruta protegida)
3. Hacer clic en **"Cargar productos de ejemplo"**
4. Se insertaran 12 productos con el campo `destacado` para Hot Sale

## Comandos disponibles

| Comando | Descripcion |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Build de produccion en `dist/` |
| `npm run preview` | Vista previa del build de produccion |
| `npm run lint` | Ejecuta ESLint en todo el proyecto |

## Estructura del proyecto

```
react-tt/
├── public/
│   ├── data/
│   │   ├── nosotros.json      # Datos del equipo (cargado por Footer)
│   │   └── productos.json     # Datos de productos (referencia)
│   └── images/                # Fotos del equipo
├── src/
│   ├── components/            # Componentes reutilizables
│   │   ├── CartWidget.jsx     # Widget del carrito en navegacion
│   │   ├── ConfirmModal.jsx   # Modal de confirmacion para eliminar
│   │   ├── Footer.jsx         # Footer con info y equipo
│   │   ├── Header.jsx         # Header con navegacion y login
│   │   ├── Item.jsx           # Tarjeta individual de producto
│   │   ├── ItemListContainer.jsx # Catalogo con busqueda y paginacion
│   │   ├── Layout.jsx         # Layout principal con Header/Footer
│   │   ├── Pagination.jsx     # Paginador de productos
│   │   ├── ProductoForm.jsx   # Formulario para crear/editar productos
│   │   ├── ProductosDestacados.jsx # Seccion Hot Sale en inicio
│   │   ├── ProtectedRoute.jsx # Ruta protegida para usuarios autenticados
│   │   ├── SearchBar.jsx      # Barra de busqueda en tiempo real
│   │   ├── SeedButton.jsx     # Boton para cargar productos de ejemplo
│   │   └── TarjetaProducto.module.css # Estilos de tarjeta (CSS Module)
│   ├── context/               # Context API
│   │   ├── AuthContext.js     # Contexto de autenticacion
│   │   ├── AuthProvider.jsx   # Proveedor de autenticacion (Firebase Auth)
│   │   ├── CartContext.js     # Contexto del carrito
│   │   └── CartProvider.jsx   # Proveedor del carrito
│   ├── data/
│   │   └── seedProductos.js   # Datos de ejemplo para poblar Firestore
│   ├── firebase/
│   │   ├── config.js          # Configuracion e inicializacion de Firebase
│   │   └── productosFirestore.js # CRUD de productos en Firestore
│   ├── hooks/
│   │   ├── useAuth.js         # Hook para acceder al contexto de auth
│   │   └── useCart.js         # Hook para acceder al contexto del carrito
│   ├── pages/
│   │   ├── AdminProductos.jsx # Administracion de productos (CRUD)
│   │   ├── Carrito.jsx        # Carrito de compras
│   │   ├── Inicio.jsx         # Pagina principal con hero y catalogo
│   │   ├── Login.jsx          # Inicio de sesion
│   │   ├── ProductoDetalle.jsx # Detalle de producto individual
│   │   ├── Productos.jsx      # Catalogo con busqueda y paginacion
│   │   └── Register.jsx       # Registro de nuevo usuario
│   ├── App.css                # Estilos globales de la aplicacion
│   ├── App.jsx                # Componente principal con rutas
│   ├── index.css              # Estilos base (reset)
│   └── main.jsx               # Punto de entrada
├── .env.example               # Plantilla de variables de entorno
├── .gitignore
├── eslint.config.js
├── index.html
├── netlify.toml               # Configuracion de deploy en Netlify
├── package.json
├── plan-de-implementacion.md  # Plan original del proyecto
└── vite.config.js
```

## Deploy en Netlify

El proyecto incluye un archivo `netlify.toml` con la configuracion basica:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

En Netlify, agregar las variables de entorno (`VITE_FIREBASE_*`) en:
**Site settings** → **Environment variables**

## Funcionalidades implementadas

- [x] Autenticacion con Firebase Auth (registro, login, logout)
- [x] Rutas protegidas (/carrito, /admin)
- [x] CRUD de productos en Firestore
- [x] Busqueda en tiempo real por nombre de producto
- [x] Paginacion (8 productos por pagina)
- [x] Productos destacados "Hot Sale" en la pagina de inicio
- [x] Carrito de compras funcional (agregar, quitar, vaciar)
- [x] Diseño responsivo con React-Bootstrap
- [x] Iconos con React Icons (Feather Icons)
- [x] SEO con React Helmet (titulos y meta descriptios por pagina)
- [x] Carga dinamica del equipo desde JSON
- [x] Seed de productos de ejemplo desde el panel admin
