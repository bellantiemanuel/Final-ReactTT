// Pagina de registro de nuevo usuario
// Valida que las contrasenas coincidan y tengan al menos 6 caracteres
// Si el usuario ya esta logueado redirige al inicio
// Helmet: title y meta description para SEO
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Register() {
  const { user, register } = useAuth()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  // Si ya hay sesion activa, redirige al inicio
  if (user) {
    return <Navigate to="/" replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validacion: las contrasenas deben coincidir
    if (password !== confirmPassword) {
      setError('Las contrasenas no coinciden')
      return
    }

    // Validacion: longitud minima de contrasena
    if (password.length < 6) {
      setError('La contrasena debe tener al menos 6 caracteres')
      return
    }

    setCargando(true)

    try {
      await register(email, password, displayName)
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('El email ya esta registrado')
      } else if (err.code === 'auth/invalid-email') {
        setError('El email no es valido')
      } else {
        setError('Error al registrarse. Intentalo de nuevo.')
      }
    } finally {
      setCargando(false)
    }
  }

  return (
    <section className="auth-page">
      <Helmet>
        <title>TechStore - Crear cuenta</title>
        <meta name="description" content="Registrate en TechStore para acceder a productos exclusivos." />
      </Helmet>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Crear cuenta</h1>

        <label htmlFor="displayName">Nombre</label>
        <input
          id="displayName"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Tu nombre"
          required
        />

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
          placeholder="Minimo 6 caracteres"
          required
        />

        <label htmlFor="confirmPassword">Confirmar contrasena</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repeti la contrasena"
          required
        />

        {error && <p className="auth-error">{error}</p>}

        <button className="accion-principal" type="submit" disabled={cargando}>
          {cargando ? 'Registrando...' : 'Crear cuenta'}
        </button>

        <p className="auth-link">
          ¿Ya tenes cuenta? <Link to="/login">Inicia sesion</Link>
        </p>
      </form>
    </section>
  )
}

export default Register
