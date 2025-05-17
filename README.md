[![Ver video](https://i.sstatic.net/Vp2cE.png)](video_demostracion/RecuperaMAS%20-%20Google%20Chrome%202025-05-16%2019-43-00.mp4)

# Demo WEBAPP – React + Vite

Proyecto demo de WebApp RecuperaMas. Lo ideal seria realizar un breve borrador o mockup en Figma o alguna plataforma similar, antes de comenzar a realizar código, definiendo la paleta de colores y los requierimientos básicos, pero dado que es una demo realizaré algo más minimalista. 

Realice un código base, pero tiene gran espacio de mejora. Además, en este repositorio deje un video de demostración para que se pueda observar como funciona sin necesidad de correr el código.


IMPORTANTE: para inicar sesion basta con poner un correo y cualquier contraseña. 

## Paleta de colores:

Primero, extraje los colores princiales de la página, en donde se muestra un color azul oscuro en el navbar, blanco de fondo que se intercala con  morados. Además, extraje algunas imagenes utiles desde la misma página.


## Stack tecnológico

Utilice React + vite, además Tailwind para algunos diseños y algunas liberias para graficos como chart y react-chartjs-2.

* React – Biblioteca principal para construir la interfaz.

* Vite – Bundler ultrarrápido para desarrollo con React.

* Chart.js + react-chartjs-2 – Para la visualización de métricas.

* Tailwind CSS – Para el diseño responsivo y elegante.

* React Icons – Íconos visuales para mejorar la UI.

## Instrucciones para ejecutar

### Ejecutar de forma local:


1. Instalar Node.js y npm
    Ir a: https://nodejs.org/

    Descarga e instala la versión LTS para tu sistema operativo.

    Verifica que se haya instalado correctamente ejecutando en tu terminal:


2. Clonar el repositorio y ejecutar desde la terminal:

    ```
    git clone https://github.com/joaquinzepeda/demo-webapp.git
    cd demo-webapp
    cd recuperamas-demo
    npm install
    npm run dev
    ```

    Luego, bastaria con abrir el navegador en el puerto indicado, normalmente http://localhost:5173/


### Github CodeSpaces (en la nube)

Deberia bastar con abrir github codespaces, ingresar a la carpeta y realimar ```npm install``` dentro de la carpeta recuperamas-demo:

    ```
    cd recuperamas-demo
    npm install
    npm run dev
    ```
NOTA: normalmente github codespaces es un poco más lento que correrlo de forma local, pero no deberia ser mucha diferencia.


## Mejoras futuras
Por tiempo, no pude implementar algunas ideas adicionales que lo hubieran hecho mejor, como:

* Visualización de mapas y geolocalización de llamadas.

* Detección de tendencias de respuesta a lo largo del tiempo.

* Análisis de respuestas comunes de usuarios.

* Alertas automáticas para agentes con bajo rendimiento.

* Página de feedback para recopilar opiniones de los usuarios.

