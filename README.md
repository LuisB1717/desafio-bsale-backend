## Bienvenido al respositorio backend de la app store

Instalación:

Debes tener instalado NODE.js una vez hayas clonado el repositorio, posteriormente ejecute el comando.

*npm install*

Una vez ejecutado el comando se descargaran todas las dependencias requeridas en el package.json.

## Objetivo

Creación de una API REST para el consumo del cliente store app.

## Descripción de la API
La API cuenta con dos endpoints:

### CATEGORIAS

Listar categorías

*GET /api/categories*, retornará todos las categorías de la BD

Respuesta

```json
[
   {
     "id": 1,
     "name": "bebida energetica"
   },
   {
     "id": 2,
     "name": "pisco"
   },
   {
     "id": 3,
     "name": "ron"
   },
   {
     "id": 4,
     "name": "bebida"
   },
   {
     "id": 5,
     "name": "snack"
   },
   {
     "id": 6,
     "name": "cerveza"
   },
   {
     "id": 7,
     "name": "vodka"
   }
 ]
```
### PRODUCTOS

Listar productos, además que podrá buscar el producto por su respectiva categoría

*GET /api/products?category=6&q=*, retornará todos los productos que pertenezcan a la categoría con id=6

Repuesta:

```json
[
  {
    "id": 98,
    "name": "Cerveza Escudo Normal LATA 350CC",
    "url_image": "",
    "price": 600,
    "discount": 0,
    "category": 6
  },
  {
    "id": 99,
    "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
    "url_image": "",
    "price": 800,
    "discount": 0,
    "category": 6
  }
]
```
*GET /api/products?category=6&q=Cerveza* Escudo Normal LATA 350CC , retornará todos los productos que pertenezcan a la categoría con id=6 y que su nombre contenga el parámetro “cerveza escudo normal”

Respuesta:
```json
[
  {
    "id": 98,
    "name": "Cerveza Escudo Normal LATA 350CC",
    "url_image": "",
    "price": 600,
    "discount": 0,
    "category": 6
  }
]
```
## Heramientas

- Node
- Express.js
- Mysql