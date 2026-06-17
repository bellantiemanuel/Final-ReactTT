// Pagina de inicio de sesion
// Si el usuario ya esta logueado redirige a la pagina principal
// Muestra errores especificos segun el codigo de Firebase
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Login() {
  const { user, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  // Si ya hay sesion activa, redirige al inicio
  if (user) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setCargando(true)

    try {
      await login(email, password)
    } catch (err) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('Email o contrasena incorrectos')
      } else if (err.code === 'auth/invalid-email') {
        setError('El email no es valido')
      } else {
        setError('Error al iniciar sesion. Intentalo de nuevo.')
      }
    } finally {
      setCargando(false)
    }
  }

  return (
    <section className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Iniciar sesion</h1>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
        />

        <label htmlFor="password">Contrasena</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        {error && <p className="auth-error">{error}</p>}

        <button className="accion-principal" type="submit" disabled={cargando}>
          {cargando ? 'Ingresando...' : 'Ingresar'}
        </button>

        <p className="auth-link">
          ¿No tenes cuenta? <Link to="/register">Registrate</Link>
        </p>
      </form>
    </section>
  )
}

export default Login
