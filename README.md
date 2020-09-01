# pruebapepeganga.github.io
# Carpeta page-base: Contiene la pagina base.
# Carpeta pruebapepeganga: Contiene el proyecto Angular con la pagina base, las paginas users y posts con el generador excel.

# Instrucciones para correr el proyecto Angular:
# ----
# Linux:
# - comandos para la instalacion de npm
# sudo apt update
# sudo apt install nodejs
# sudo apt install npm
# nodejs -v
# - comandos para la instalacion de Angular
# npm install -g @angular/cli
# - correr proyecto Angular: comandos
# cd pruebapepeganga
# npm install
# ng serve
# ----------------------
# ----
# Windows:
# - Instalacion de npm: 
# Enlace node: https://nodejs.org/dist/v12.18.3/node-v12.18.3-x86.msi
# - comandos para la instalacion de Angular
# npm install -g @angular/cli
# - correr proyecto Angular: comandos
# cd pruebapepeganga
# npm install
# ng serve
# ----------------------
# El proyecto se corre por defecto en el puerto: 4200
# Una vez haya ejecutado el proyecto, para probar la
# App puede dirigirse a los siguientes enlaces: 
# landingPage - http://localhost:4200/landing
# userPage - http://localhost:4200/users
# postsPage - http://localhost:4200/posts


# Apuntes:
# El repositorio esta dividido en 4 ramas: page-half, page-half2, angular y la rama principal master
# Proyecto Angular - pruebapepeganga: 
#    1. Se dividio cada seccion como un componente Angular.
#    2. Se crearon 3 rutas: landing, users, posts.
#    3. El landing cuenta con un carousel que consume los datos de la api: https://dummyapi.io/data/api/user?limit=10
#    4. La pagina users y posts estan consumiendo los datos de las respectivas solicitudes asignadas en la prueba y se #       genera el excel desde typescript
