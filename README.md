# Utilidades con docker
## Ananconda server
Permitira levantar un contenedor con ambiente de Anaconda, para ejecutar notebooks con el servidor de Jupyter. Se mapea un binding mount para montar los notebooks y que sean persistentes
```bash
docker-compose up --build
```
## NodeJS server
Permitira levantar un servidor de NodeJS y desplegar aplicacion sencilla, haciendo ping a otro servidor con BD Redis y mostrandolo en la pagina inicial
```bash
docker-compose up --build
```

## Django-Python app base
Permitira levantar un contenedor corriendo una aplicacion web de python con el framework de django, se pueden seguir creando aplicacion de django teniendo esta base, mediante el comando `python manage.py startapp nombre_de_la_aplicacion`
```bash
docker-compose up --build
```