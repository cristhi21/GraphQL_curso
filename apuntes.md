
- [Graph QL](https://graphql.org/)
- [Documentacion Apollo](https://www.apollographql.com/)

Crear un servidor y como integrarlo con los framework del frontend

1. Instalar Express
```sh
npm i express
```

Probar
node index.js

- [Instalar Babel](https://babeljs.io)
npm install --save-dev @babel/core @babel/cli @babel/preset-env

- [Usar babel con Node](https://www.npmjs.com/package/@babel/node)
npm install --save-dev @babel/node

Crear script build en package.json para compilar con babel ficheros de src y enviar lso a carpeta dist

```bash
# Cuando ya terminemos de desarrollar
npm run build

# Cuando estemos desarrollando
npm start
```

[Instalar nodemon](https://www.npmjs.com/package/nodemon)
npm i nodemon -D


> Nota: Por si da problema
> Limpiar cache
> npm cache clean --force
> Borrar node_modules
> rm -rf node_modules
> A lo ultimo me toco instalar nodemon globalmente

```bash
npm install -g nodemon

# Instalar rimraf  , para eliminar carpetas, sisver para cualquier sistema operativo

npm i rimraf
```

Integrar Graphql
[Graphql](https://graphql.org/)
https://www.npmjs.com/package/graphql

npm i graphql express-graphql graphql-tools


El schema me permite que es lo quepuedo consultar


http://localhost:3000/graphql
```
{
  hello
}
```