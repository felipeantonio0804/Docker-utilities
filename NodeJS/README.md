# NodeJS server
## app
1. Permitirá levantar un servidor de NodeJS con framework express, aplicación consiste en mostrar información haciendo ping a otro servidor con BD Redis que se encuentra en un segundo contenedor y que se comunican por medio de una red creada por docker
## express-first-server
1. Permitirá levantar un servidor de NodeJS con framework express, usando: routing, motor de vistas ejs (con bootstrap), y definición de controladores que dan soporte a las rutas
## nest-firstserver
1. Permitirá levantar un servidor de NodeJS con framework nestjs, contiene solo la definicion de una API con sus operaciones de CRUD para tareas, incluye solo el backend y que esta amarrado a un contenedor de MongoDB donde se almacena la informacion de forma persistente. Las operaciones del CRUD se pueden realizar por el programa de Postman o Insomnia
![get task](https://imgur.com/suDeO2p "Obteniendo tarea")
![get tasks](https://imgur.com/EWiZ2Lm "Obteniendo tareas")
![creating task](https://imgur.com/XlyumAs "Creando tarea")
![updating task](https://imgur.com/TugbALx "Actualizando tarea")
![deleting task](https://imgur.com/b8ABr2m "Eliminando tarea")