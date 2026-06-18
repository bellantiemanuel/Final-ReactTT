# Resumen Etapa 6 — Documentacion, Env vars y Permisos

## 1. Variables de entorno para Firebase

**`.env.example`** (nuevo) — Plantilla con las 6 variables `VITE_FIREBASE_*`.

**`src/firebase/config.js`** — Cada campo de `firebaseConfig` ahora lee de `import.meta.env.VITE_FIREBASE_*` con fallback a los valores hardcodeados del proyecto existente. Si no hay `.env`, la app funciona igual.

**`.gitignore`** — Agregada la entrada `.env` para evitar comitear credenciales.

---

## 2. README actualizado

**`README.md`** (reescrito completo) — Incluye:
- Requisitos previos (Node >= 18, npm >= 9, cuenta Firebase)
- Instalacion paso a paso
- Configuracion de Firebase (crear proyecto, habilitar Auth + Firestore, .env)
- Reglas de Firestore para desarrollo
- Como poblar la base de datos (seed desde `/admin`)
- Todos los comandos disponibles (`dev`, `build`, `preview`, `lint`)
- Estructura completa del proyecto (arbol de directorios)
- Deploy en Netlify (configuracion `netlify.toml` + variables de entorno)
- Checklist de funcionalidades implementadas

---

## 3. Boton "Agregar al carrito" en destacados

**`src/components/ProductosDestacados.jsx`**:
- Boton "Ver oferta" (que redirigia a detalle) reemplazado por un `<button>` con texto **"Agregar al carrito"**
- Llama a `addItem(producto)` del hook `useCart`
- Importado `useCart` desde `../hooks/useCart`

---

## 4. Restriccion de administrador por email

**`src/pages/AdminProductos.jsx`**:
- Definida constante `ADMIN_EMAIL = 'bellantiemanuel@gmail.com'`
- Obtenido el usuario actual via `useAuth()`
- Variable `esAdmin = user?.email === ADMIN_EMAIL`
- Si `esAdmin` es `true`: se renderiza el formulario, tabla, botones Editar/Eliminar y SeedButton
- Si `esAdmin` es `false`: se muestra el mensaje *"No tienes permisos para administrar productos"*

---

## 5. Carrito accesible sin autenticacion

**`src/App.jsx`**:
- Ruta `/carrito` ya no esta envuelta en `<ProtectedRoute>`, ahora es publica

**`src/pages/Carrito.jsx`**:
- Importado `useAuth` para detectar si hay sesion activa
- Si el usuario esta logueado: muestra boton **"Vaciar carrito"** (comportamiento anterior)
- Si NO hay sesion: muestra un link a `/login` con el texto **"Iniciar sesion o registrarse para terminar la compra"** y el icono `FiLogIn`
- Los items del carrito se visualizan igual en ambos casos

---

## 6. Archivos modificados

| Archivo | Cambio |
|---|---|
| `.env.example` | Creado con variables VITE_FIREBASE_* |
| `.gitignore` | Agregado `.env` |
| `README.md` | Reescrito completo |
| `src/firebase/config.js` | Env vars con fallback a hardcode |
| `src/App.jsx` | Sacado ProtectedRoute de /carrito |
| `src/components/ProductosDestacados.jsx` | "Ver oferta" → "Agregar al carrito" |
| `src/pages/AdminProductos.jsx` | Restriccion por email admin |
| `src/pages/Carrito.jsx` | Login prompt para usuarios no autenticados |
| `netlify.toml` | Sin cambios (ya existia) |
