// Proveedor del contexto de autenticacion
// Expone: user, cargando, register, login, logout
// Observa cambios en la sesion con onAuthStateChanged
import { useMemo, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { auth } from '../firebase/config'
import AuthContext from './AuthContext'

function AuthProvider({ children }) {
  // user: objeto del usuario autenticado (null si no hay sesion)
  // cargando: true mientras Firebase verifica si hay sesion activa
  const [user, setUser] = useState(null)
  const [cargando, setCargando] = useState(true)

  // Escucha cambios de autenticacion (persiste sesion al recargar)
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario)
      setCargando(false)
    })

    return unsuscribe
  }, [])

  // Registro: crea usuario y le asigna un nombre para mostrar
  const register = async (email, password, displayName) => {
    const credencial = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(credencial.user, { displayName })
    setUser({ ...credencial.user, displayName })
  }

  // Login: inicia sesion con email y contrasena
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  // Logout: cierra la sesion
  const logout = async () => {
    await signOut(auth)
  }

  // Memoriza el valor del contexto para evitar renders innecesarios
  const value = useMemo(() => ({
    user,
    cargando,
    register,
    login,
    logout
  }), [user, cargando])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
