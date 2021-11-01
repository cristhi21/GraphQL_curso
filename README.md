# Curso Graphql, Curso Practico con Nodejs y Mongodb

Fuentes:

- [Fazt, Youtube](https://www.youtube.com/watch?v=Wl8O6wW4FJU)
- [Graph QL](https://graphql.org/)
- [Documentacion Apollo](https://www.apollographql.com/)

Crear un servidor y como integrarlo con los framework del frontend

## 1. Instalar Dependencias

- [Express](https://expressjs.com/es/)
- [Babel](https://babeljs.io)
- [Usar babel con Node](https://www.npmjs.com/package/@babel/node)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Graphql](https://graphql.org/)
- [NPM Graphql](https://www.npmjs.com/package/graphql)


```sh
# Express
npm i express

# Babeljs
npm install --save-dev @babel/core @babel/cli @babel/preset-env

# Babel con Node
npm install --save-dev @babel/node

# Nodemon
npm i nodemon -D

# Instalar rimraf  , para eliminar carpetas, sisver para cualquier sistema operativo
npm i rimraf

# Graphql
npm i graphql express-graphql graphql-tools
```


> Nota: Por si da problema ejecutar los scripts del package.json hacer los siguiente:
```sh
# Limpiar cache
npm cache clean --force

# Borrar node_modules
rm -rf node_modules
``` 
> Nota: Me toco instalar nodemon globalmente asi:

```sh
npm install -g nodemon
```

## 2. Crear scripts en package.json para compilar con babel ficheros de src y enviar los a carpeta dist

```bash
# Cuando ya terminemos de desarrollar y queremos tener nuestro artefacto en la carpeta dist
npm run build

# Cuando estemos desarrollando y querramos ver los cambios que realicemos con nodemon
npm start

# Ejecutar dist/index
npm run serve

# Borrar carpeta dist
npm run clean
```


El schema me permite que es lo que puedo consultar


http://localhost:3000/graphql
```
{
  hello
}


{
  greet(name:"vargas")
}
```


Ejemplo de consulta a task
```
{
  task {
    _id,
    title
  }
}
```

## Mutation

Cuando hacemos una mutacion a traves de un input ponemos los datos de entrada
Example de mutacion
```
mutation {
  createTask(input: {
    title: "Task One",
    description: "Example task description"
  }) {
    _id
    title
    description
    number
  }
}
```

Otra insersion: 
```
mutation {
  createTask(input: {
    title: "Task four",
    description: "Example four description"
    number: 444
  }) {
    _id
    title
    description
    number
  }
}
```

Consultar datos
```
query {
  task{
    _id
    title
    description
    number
  }
}
```

## 3.  Persistencia con MongoDB
npm install mongoose



Contex

Es para poder pasar cosas entre los resolves
Sirve en casos de autenticacion, cadenas de conexion

#### Creacion de un usuario
```
mutation {
  createUser(input: {
    firstname: "Zonia"
    lastname: "vargas"
    age: 25
  }) {
  	_id
    firstname
    age  
  }
}
```

### Consultar usuarios
```
{
  users {
    _id
    firstname
    lastname
  }
}
```

### Borrar usuario

```
mutation {
  deleteUser(_id:"617ffb097b46f8210c48c7b4") {
    _id
    firstname
  }
}
```

### Actualizar usuario

```
mutation {
  updateUser(_id:"617ffb663132b2821d71b365",
  input: {
    firstname: "Isa"
    lastname: "zara"
    age: 1
  }
  ) {
    _id
    lastname
    firstname
  }
}
```