# API Arquitectura Hexagonal, Socket.io, Mysql

## Descripción

Este proyecto es una API construida con Node.js, utilizando la arquitectura hexagonal, MySQL y Socket.io.

## Requisitos

- Node.js
- MySQL
- Otras dependencias (ver `package.json`)

## Instalación

1. Clona el repositorio: `git clone https://github.com/juanccode/hexagonal-architecture-api-socketio-mysql.git`
2. Instala las dependencias: `npm i`
3. Configura la base de datos MySQL, siguiendo los siguientes pasos:

|#  | Pasos        |
|---|--------------|
| 1 | Abre una consola MySQL y conéctate a tu servidor MySQL|
| 2 | Crea una nueva base de datos para el proyecto: `CREATE DATABASE mydatabase;`|
| 3 | Selecciona la base de datos recién creada: `USE mydatabase;`|
| 4 | Ejecuta el archivo `seed.sql` para crear la tabla y llenarlas con datos de prueba: `SOURCE /path/to/seed.sql;`|

4. Crea un archivo `.env` y copia el contenido del archivo `.env.example`
5. Actualiza los datos del archivo `.env`
6. Ejecuta el proyecto en modo dev: `npm run start:dev`

## Uso

Mientras desarrolla, puede iniciar el servidor en modo de depuración con el siguiente comando:

```
npm run start:dev
```

Para producción, puede iniciar el servidor con el siguiente comando:

```
npm run start
```

## Licencia

Este proyecto está autorizado bajo la licencia MIT.