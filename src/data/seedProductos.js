// Productos de ejemplo para poblar la coleccion "productos" en Firestore
// Cada producto tiene nombre, precio numerico, imagen URL, descripcion y flag destacado
// Los productos con destacado: true se muestran en la seccion "Hot Sale" de la pagina de inicio
const productos = [
  {
    nombre: 'Auriculares Gamer',
    precio: 120,
    imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    descripcion: 'Auriculares con sonido envolvente 7.1, microfono removible y iluminacion RGB personalizable.',
    destacado: true
  },
  {
    nombre: 'Teclado Mecanico',
    precio: 90,
    imagen: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400',
    descripcion: 'Teclado mecanico con switches Cherry MX, retroiluminacion RGB y reposamanos magnetico.',
    destacado: false
  },
  {
    nombre: 'Mouse RGB',
    precio: 45,
    imagen: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    descripcion: 'Mouse ergonomico con sensor optico de 16000 DPI, 8 botones programables y iluminacion RGB.',
    destacado: true
  },
  {
    nombre: 'Monitor Full HD',
    precio: 210,
    imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    descripcion: 'Monitor IPS de 27 pulgadas, resolucion Full HD, 144Hz, compatible con G-Sync y FreeSync.',
    destacado: false
  },
  {
    nombre: 'Webcam HD',
    precio: 65,
    imagen: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400',
    descripcion: 'Camara web 1080p con autoenfoque, microfono integrado y obturador de privacidad.',
    destacado: false
  },
  {
    nombre: 'Silla Gamer',
    precio: 350,
    imagen: 'https://images.unsplash.com/photo-1598550476439-6847a6e0d8b0?w=400',
    descripcion: 'Silla ergonomica con soporte lumbar ajustable, reposabrazos 4D y tapizado de cuero sintetico.',
    destacado: true
  },
  {
    nombre: 'Tablet 10 Pulgadas',
    precio: 280,
    imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    descripcion: 'Tablet con pantalla IPS de 10 pulgadas, 128GB de almacenamiento y bateria de 12 horas.',
    destacado: false
  },
  {
    nombre: 'Parlante Bluetooth',
    precio: 55,
    imagen: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    descripcion: 'Parlante portatil resistente al agua, 20W de potencia y hasta 15 horas de reproduccion.',
    destacado: false
  },
  {
    nombre: 'Disco SSD 1TB',
    precio: 130,
    imagen: 'https://images.unsplash.com/photo-1607877827170-82eecd36aab4?w=400',
    descripcion: 'Unidad SSD NVMe M.2 de 1TB con velocidades de lectura de hasta 3500MB/s.',
    destacado: false
  },
  {
    nombre: 'Cable USB-C',
    precio: 15,
    imagen: 'https://images.unsplash.com/photo-1617992475182-7b2b1a12b3c9?w=400',
    descripcion: 'Cable USB-C a USB-A de 2 metros, carga rapida y transferencia de datos a 10Gbps.',
    destacado: false
  },
  {
    nombre: 'Hub USB 7 Puertos',
    precio: 35,
    imagen: 'https://images.unsplash.com/photo-1617886903355-935bb660b26e?w=400',
    descripcion: 'Hub USB 3.0 con 7 puertos, alimentacion externa y compatibilidad plug-and-play.',
    destacado: false
  },
  {
    nombre: 'Microfono Condenser',
    precio: 95,
    imagen: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400',
    descripcion: 'Microfono condenser USB con patron cardioide, soporte de escritorio y filtro antipop incluido.',
    destacado: true
  }
]

export default productos
