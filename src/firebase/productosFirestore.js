// Servicio CRUD para la coleccion "productos" en Firestore
// Cada funcion asincrona maneja una operacion distinta sobre la base de datos
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from 'firebase/firestore'
import { db } from './config'

const coleccion = 'productos'

// Obtiene todos los productos ordenados alfabeticamente por nombre
export async function getAll() {
  const q = query(collection(db, coleccion), orderBy('nombre'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

// Obtiene un producto por su ID de Firestore
// Retorna null si no existe
export async function getById(id) {
  const ref = doc(db, coleccion, id)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  return { id: snap.id, ...snap.data() }
}

// Agrega un nuevo producto a la coleccion y devuelve su ID
export async function create(data) {
  const ref = await addDoc(collection(db, coleccion), data)
  return ref.id
}

// Actualiza los campos de un producto existente
export async function update(id, data) {
  const ref = doc(db, coleccion, id)
  await updateDoc(ref, data)
}

// Elimina un producto por su ID
export async function remove(id) {
  const ref = doc(db, coleccion, id)
  await deleteDoc(ref)
}
