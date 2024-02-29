#**BACKEND PROYECTO CLON-MELI**


<p>
Este backend está realizado con Mongo DB, express, y Node js.
Se irán cargando nuevas funcionalidades y modificando las existentes a medida que el proyecto lo requiera.
</p>

###Login:
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

####Respuesta para un login exitoso:
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

###Register:
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
