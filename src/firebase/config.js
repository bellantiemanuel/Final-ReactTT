// Inicializa Firebase con las credenciales del proyecto
// Exporta auth (autenticacion) y db (Firestore) para usar en la app
// Las credenciales se leen de variables de entorno VITE_FIREBASE_* con fallback
// a los valores del proyecto existente para desarrollo local
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAM5PcfI4GdHZ2XMIiwsNWPtVDs2hT64I4',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'react-tt.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'react-tt',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'react-tt.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '269151611392',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:269151611392:web:a4df87aee2139ad99046e5'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
export default app
