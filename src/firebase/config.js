// Inicializa Firebase con las credenciales del proyecto
// Exporta auth (autenticacion) y db (Firestore) para usar en la app
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAM5PcfI4GdHZ2XMIiwsNWPtVDs2hT64I4',
  authDomain: 'react-tt.firebaseapp.com',
  projectId: 'react-tt',
  storageBucket: 'react-tt.firebasestorage.app',
  messagingSenderId: '269151611392',
  appId: '1:269151611392:web:a4df87aee2139ad99046e5'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
export default app
