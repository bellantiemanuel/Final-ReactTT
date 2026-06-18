# Etapa 4b — Seed de productos de ejemplo

## Objetivo

Poblar la colección `productos` de Firestore con datos de muestra, ya que actualmente se encuentra vacía y el catálogo no muestra ningún producto.

## Archivos creados

### `src/data/seedProductos.js`

Contiene un array de **12 productos de ejemplo** con la siguiente estructura cada uno:

| Campo | Tipo | Ejemplo |
|---|---|---|
| `nombre` | string | "Auriculares Gamer" |
| `precio` | number | 120 |
| `imagen` | string (URL) | `https://images.unsplash.com/...?w=400` |
| `descripcion` | string | "Auriculares con sonido envolvente 7.1..." |

Productos incluidos:
1. Auriculares Gamer ($120)
2. Teclado Mecánico ($90)
3. Mouse RGB ($45)
4. Monitor Full HD ($210)
5. Webcam HD ($65)
6. Silla Gamer ($350)
7. Tablet 10 Pulgadas ($280)
8. Parlante Bluetooth ($55)
9. Disco SSD 1TB ($130)
10. Cable USB-C ($15)
11. Hub USB 7 Puertos ($35)
12. Micrófono Condenser ($95)

### `src/components/SeedButton.jsx`

Componente que:
- Muestra un botón **"Cargar productos de ejemplo"** en la página de administración
- Al hacer clic pide confirmación con `confirm()`
- Inserta cada producto en Firestore secuencialmente usando `create()` de `productosFirestore`
- Muestra estado de carga mientras se insertan
- Al finalizar muestra mensaje de éxito con la cantidad de productos insertados
- Llama a `onComplete()` para refrescar la tabla del admin automáticamente

## Archivos modificados

### `src/pages/AdminProductos.jsx`

- Importado `SeedButton`
- Agregado `<SeedButton onComplete={recargar} />` al final del componente
- Pasa la función `recargar` como callback para que al terminar la seed se refresque la tabla

## Cómo usar

1. Iniciar sesión en la aplicación
2. Navegar a **/admin** (ruta protegida)
3. Hacer clic en **"Cargar productos de ejemplo"**
4. Confirmar la acción en el diálogo
5. Esperar a que se inserten los 12 productos
6. La tabla se actualizará automáticamente con los nuevos productos
7. Navegar a **/productos** para ver el catálogo con los productos visibles y la paginación funcionando (12 productos = 2 páginas de 8)

## Notas

- Los precios se almacenan como números en Firestore para facilitar cálculos
- Las imágenes usan Unsplash con el parámetro `?w=400` para optimizar el tamaño
- El botón de seed solo aparece en la ruta protegida `/admin`
- Si se ejecuta más de una vez, se crearán productos duplicados (no hay control de unicidad)
