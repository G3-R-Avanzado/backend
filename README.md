# **BACKEND PROYECTO CLON-MELI**

<p>
Este backend está realizado con Mongo DB, express, y Node js.
Se irán cargando nuevas funcionalidades y modificando las existentes a medida que el proyecto lo requiera.
</p>

## <<<<<<<<<<USUARIOS>>>>>>>>>>

### Login:

<p>
Url que deberas usar para el login:
</p>

`https://backend-o1tb.onrender.com/api/login`

<p>
El backend estará esperando un objeto para el login.
Usuario de prueba:
</p>

```javascript
{
"email" : "g3admin@gmail.com",
"password": "g3-admin"
}
```
<p>
Este usuario tiene el rol de "admin" y se puede usar para las pruebas en la creacion del login.
</p>

### Respuesta para un login exitoso:

```javascript
{
  "id": "65dfe2042fc491eb49032e93",
  "username": "g3-admin",
  "email": "g3admin@gmail.com",
  "rol": "admin",
  "createdAt": "2024-02-29T01:46:44.495Z",
  "updatedAt": "2024-02-29T01:46:44.495Z"
}
```
```javascript
{
"email" : "g3admin@gmail.com",
"password": "g3-admin"
}
```

### Logout:

<p>
Url que deberas usar para el deslogeo de usuarios. Devuelve el msj: "Sesion cerrada"
</p>

`https://backend-o1tb.onrender.com/api/logout`



### Register:

<p>
Url que deberas usar para el register:
</p>

`https://backend-o1tb.onrender.com/api/register`

<p>
Para el register el objeto debe tener el siguiente formato:
</p>

```javascript
{
name:"Rolling Code School",
username : "g3admin@gmail.com",
email:"g3admin@gmail.com",
password: "g3-admin",

}
```

<p>
Tener encuenta que la propiedad "rol" se cargará por defecto con la palabra "customer"
</p>

### Verificar token:

<p>
Url que deberas usar para la verificación:
</p> 

`https://backend-o1tb.onrender.com/api/verify`

<p>
Si el token es correcto, devolverá los datos del usuario logueado
</p>


### Obtener listado de usuarios

<p>
Url que deberas usar para obtener un arreglo con todos los usuarios registrados, tanto clietnes como administradores:
</p>

`https://backend-o1tb.onrender.com/api/users`

### Borrar usuario

<p>
Url que deberas usar para eliminar un usuario, recordá usar el metodo delete y agregar el id del usuario al final de la url
</p>

`https://backend-o1tb.onrender.com/api/users/aqui-el-id-de-usuario`



## <<<<<<<<<<CATEGORÍAS>>>>>>>>>>

<p>
  Las rutas para crear categoría, traer 1 categoría y borrar una categoría serán de uso exclusivo de los administradores!.
</p>

### Obtener listado de categorías

`https://backend-o1tb.onrender.com/api/categories`


### Obtener una categoría

`https://backend-o1tb.onrender.com/api/categories/id-categoria`


### Crear una nueva categoría

`https://backend-o1tb.onrender.com/api/categories/create`

### Eliminar una categoría

`https://backend-o1tb.onrender.com/api/categories/delete/id-categoria`

<p>
Estructura de cada categoría
</p>

```javascript
{
    name: "Electrónica",
    subcategories: [
      "Celulares y smartphones",
      "Computadoras",
      "Televisores",
      "Consolas de videojuegos",
      "Audio y sonido",
      "Cámaras y fotografía",
      "Electrodomésticos",
      "Otros artículos electrónicos"
    ]
  }
```

