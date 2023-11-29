# NodeJS server
## app
1. Permitirá levantar un servidor de NodeJS con framework express, aplicación consiste en mostrar información haciendo ping a otro servidor con BD Redis que se encuentra en un segundo contenedor y que se comunican por medio de una red creada por docker
```bash
$ docker-compose -f docker-compose-app.yml up --build 
```
## express-first-server
1. Permitirá levantar un servidor de NodeJS con framework express, usando: routing, motor de vistas ejs (con bootstrap), y definición de controladores que dan soporte a las rutas
```bash
$ docker-compose -f docker-compose-express-first-server.yml up --build 
```
## nest-firstserver
1. Permitirá levantar un servidor de NodeJS con framework nestjs, contiene solo la definicion de una API con sus operaciones de CRUD para tareas, incluye solo el backend y que esta amarrado a un contenedor de MongoDB donde se almacena la informacion de forma persistente. Las operaciones del CRUD se pueden realizar por el programa de Postman o Insomnia
```bash
$ docker-compose -f docker-compose-nest-firstserver.yml up --build 
```
![get task](https://i.imgur.com/suDeO2p.png "Obteniendo tarea")
![get tasks](https://i.imgur.com/EWiZ2Lm.png "Obteniendo tareas")
![creating task](https://i.imgur.com/XlyumAs.png "Creando tarea")
![updating task](https://i.imgur.com/TugbALx.png "Actualizando tarea")
![deleting task](https://i.imgur.com/b8ABr2m.png "Eliminando tarea")

## nest-firstserver
1. Permitirá levantar un servidor de NodeJS con framework nestjs, contiene solo la definicion de una API con sus operaciones de CRUD para usuarios, tambien la relacion entre dos entidades de una base de datos Mysql, incluye solo el backend. Las operaciones del CRUD se pueden realizar por el programa de Postman o Insomnia
```bash
$ docker-compose -f docker-compose-nestjs-typeorm-mysql.yml up --build 
```