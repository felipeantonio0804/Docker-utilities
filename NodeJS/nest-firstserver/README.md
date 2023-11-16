# Documentación
1. Instalación 
Se instala el cliente de nestjs y se crea proyecto base
```bash
$ npm i -g @nestjs/cli
$ nest new nameProject
```
Adicional se modificaron archivos para aplicar el hot reload, para cambios en archivos con webpack [read more here](https://docs.nestjs.com/recipes/hot-reload#hot-module-replacement)

2. Corriendo la app
```bash
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

3. Generando controladores, servicios y modulo
```bash
# Helping info
$ nest --help
$ nest generate controller nameController 
```
Generacion de DTO de forma manual (para aprovechar indicar los datos que se estan transfiriendo)
```bash
$ nest generate service nameService
$ nest generate module nameModule
```
Para saber que es el servicio que soportara al controlador debe tener el mismo nombre y lo deja en la misma carpeta, de igual forma para el modulo

4. Conexion a BD 
A traves de la libreria de moongose podemos conectarnos a la base de datos y modelar la misma. [read more here](https://docs.nestjs.com/techniques/mongodb)
```bash
$ npm i @nestjs/mongoose mongoose
```
Despues se debe agregar al modulo la cadena de conexion a la BD.
Se deben crear los esquemas de la BD e importarlos dentro del modulo.
A las interfaces se les debe agregar otras propiedades que para el caso vienen de la clase Document de moongose por eso se hace una herencia de la misma