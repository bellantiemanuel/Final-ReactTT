// Punto de entrada de la aplicacion
// BrowserRouter: enrutador principal
// AuthProvider: provee el contexto de autenticacion a toda la app
// CartProvider: provee el contexto del carrito a toda la app
// HelmetProvider: maneja los tags title/meta para SEO via react-helmet-async
// bootstrap.min.css importado globalmente para usar componentes de react-bootstrap
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import AuthProvider from './context/AuthProvider'
import CartProvider from './context/CartProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
