Este repositorio contiene dos aplicaciones: una API y un cliente.

#####API
La API está desarrollada con NestJS y se encuentra en la carpeta /api.
#####Cliente
El cliente está desarrollado con Vite y React y se encuentra en la carpeta /client.

#####Entorno de desarrollo
Para ejecutar las dos aplicaciones, necesita tener instalados:

- Node.js
- Yarn o NPM
- PostgreSQL

#####Pasos para correr localmente

1. Crear BD para Postgres.
2. Este repositorio utiliza mailgun para envío de emails por lo cual hace falta crear cuenta en mailgun y generar y api key junto con api domain.
3. Completar las variables de entorno de ambos proyectos usar el archivo `.env.example` para crear `.env.local` en cada uno de los proyectos.
4. Instalar dependencias de ambos proyectos con en sus respectivos directorios `yarn install`
5. Correr localmente servidor con `yarn start` en /api
6. Correr localmente client con `yarn dev` en /client

_Nota: El envío de mail por medio de mailgun en una cuenta gratuita solo es posible habiendo validado el mail._
