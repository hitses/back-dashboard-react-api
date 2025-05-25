# Backend dashboard de React

Este servidor se encarga de manejar las solicitudes de los clientes y proporcionar información de las bases de datos para el proyecto de [Dashboard de React](https://github.com/hitses/front-dashboard-react-api).

<!-- LINK AL REPOSITORIO DE LA APLICACIÓN REACT -->

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando en la terminal:

```bash
npm install
```

## Configuración de la base de datos

Para poder utilizar el servidor, es necesario que en local se esté ejecutando un servicio de base de datos MySQL.

La configuración del servidor se encuentra en el archivo `.src/config/configDb.js`.

En este archivo, se define la conexión a la base de datos, así como la configuración de la conexión a la base de datos.

Una vez comprobados los datos de configuración, se puede iniciar el servidor con el siguiente comando:

```bash
npm start
```

Aunque el servidor se ha configurado para crear la base de datos `apartments_jero` automáticamente y crear las tablas correspondientes con datos de ejemplo, es posible que se necesite crear ésta base de datos manualmente.

**Antes de ello, se recomiendo iniciar el servidor y verificar que la base de datos se creó correctamente.**

## Configuración de CORS

Para permitir la comunicación entre el servidor y el cliente, se utiliza el middleware de CORS.

El archivo `.src/middlewares/cors.js` contiene la configuración necesaria.

En este archivo, se define la configuración de CORS, que incluye los orígenes permitidos (CAMBIAR O AÑADIR MÁS SI EL ENLACE DE CONEXIÓN DE FRONTEND ES DIFERENTE).
