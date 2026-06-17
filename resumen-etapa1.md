# Etapa 1 - Autenticación de usuarios

## Implementado

### Firebase
- Proyecto Firebase creado (`react-tt`)
- Authentication habilitado con Email/Password
- Configuración en `src/firebase/config.js`

### Contexto de autenticación
- `src/context/AuthContext.js` — Contexto con createContext
- `src/context/AuthProvider.jsx` — Provider con register, login, logout y onAuthStateChanged
- `src/hooks/useAuth.js` — Hook personalizado para consumir el contexto

### Páginas de autenticación
- `src/pages/Login.jsx` — Formulario de inicio de sesión con manejo de errores (credenciales inválidas, email inválido)
- `src/pages/Register.jsx` — Formulario de registro con validaciones (contraseñas coinciden, mínimo 6 caracteres, email duplicado)

### Protección de rutas
- `src/components/ProtectedRoute.jsx` — Redirige a /login si no hay usuario autenticado
- Ruta /carrito protegida en App.jsx

### Integración en la app
- `src/main.jsx` — AuthProvider envuelve a CartProvider
- `src/components/Header.jsx` — Muestra nombre de usuario + "Cerrar sesión" o enlace "Iniciar sesión"
- `src/App.css` — Estilos para header con auth, formularios, errores, diseño responsive

### Dependencias usadas
- firebase ^12.15.0 (ya instalada)

## Próximo paso
Paso 2: CRUD de productos con Firebase Firestore
