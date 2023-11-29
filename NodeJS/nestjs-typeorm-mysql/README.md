# Documentación
1. Instalación 
Se instala el cliente de nestjs y se crea proyecto base
```bash
$ npm i -g @nestjs/cli
$ nest new nameProject
```
Adicional se pueden modificaron archivos para aplicar el hot reload, para cambios en archivos con webpack [read more here](https://docs.nestjs.com/recipes/hot-reload#hot-module-replacement)

2. Corriendo la app
```bash
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

3. Generando modulo, controladores y servicios
```bash
# Helping info
$ nest --help
$ nest generate module nameModule
$ nest generate service nameService
$ nest generate controller nameController 
```
* Generacion de DTO de forma manual (para aprovechar indicar los datos que se estan transfiriendo)
* Para saber que es el servicio que soportara al controlador debe tener el mismo nombre y lo deja en la misma carpeta, de igual forma para el modulo

4. Conexion a BD 
A traves de la libreria de typeorm podemos conectarnos a la base de datos y modelar la misma a traves de entidades (se usan diferentes tipos de datos de acuerdo al motor de base de datos seleccionado). [read more here](https://typeorm.io/entities#what-is-entity)

Para saber los tipos de relaciones que se pueden hacer entre entidades tambien se puede leer la documentacion. [Relations](https://typeorm.io/relations)

Para realizar la conectividad de nestjs con la base de datos si nos basamos en la documentacion de nestjs. [Recipes - SQL (TypeORM)](https://docs.nestjs.com/recipes/sql-typeorm).


```bash
$ npm install --save typeorm mysql2 @nestjs/typeorm
```
Despues se debe agregar al modulo la cadena de conexion a la BD.
Se deben crear las entidades a modelar en la BD de cada uno de los modulos e importarlos dentro del modulo.
Para el caso de querer utilizar servicios de un modulo principal, en un modulo secundario, se debe hacer la exportacion en el modulo principal y la importacion en el secundario