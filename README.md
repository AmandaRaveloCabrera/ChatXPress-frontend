# ChatXPress front-end aplicación movil

## Descripción

Este repositorio se encuentra la parte front-end móvil de la aplicación ChatXPress.

Este proyecto es una aplicación de mensajería, la cual, esta formado por tres partes: un back-end y un front-end para la aplicación móvil donde los usuarios se conectarán para mandarse mensajes unos a otros y otro front-end para la aplicación web donde se gestionarán estos usuarios por un administrador.

Los links a los otros repositorios son los siguientes:

- [Back-end](https://github.com/SaulArteaga/ChatXPress-Backend)
- [Front-end Web](https://github.com/SaulArteaga/ChatXPress-FrontEnd-Web)

A continuación se detallará como instalar y levantar la aplicación móvil.

## Intalación de librerias

Para este primer paso debemos tener instalado node. Si no lo tiene instalado, diríjase al [siguiente link](https://nodejs.org/en)

Para poder ejecutar la aplicación es necesario instalar los paquetes que encontramos en el `package.json`.

Debemos ejecutar el siguiente comando:

```
npm i
```

Al terminar de instalarlo tendremos todos los paquetes necesarios para runear este proyecto.

## Iniciar la aplicación

Para iniciar la aplicación se debe ejecutar el siguiente comando en la consola del proyecto:

```
npm start
```

## Dispositivo necesario

Es necesario tener el teléfono móvil conectado a la misma red que el ordenador / portátil donde se encuentra ejecutandose el proyecto. Además, se pueden usar emuladores para utilizar la aplicación.

## Otras formas de ejecutar la aplicación

Si quiere ejecutarlo con un teléfono android sería con el siguiente comando:

```
npm run android
```

En este caso, si es con un teléfono IPhone:

```
npm run ios
```

Y por último, si quiere ejecutarlo en la web:

```
npm run web
```

---
