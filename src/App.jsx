// Componente principal con las rutas de la aplicacion
// /carrito y /admin estan protegidas con ProtectedRoute (requieren autenticacion)
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminProductos from './pages/AdminProductos'
import Carrito from './pages/Carrito'
import Inicio from './pages/Inicio'
import Login from './pages/Login'
import ProductoDetalle from './pages/ProductoDetalle'
import Productos from './pages/Productos'
import Register from './pages/Register'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={
          <ProtectedRoute><Carrito /></ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute><AdminProductos /></ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  )
}

export default App
