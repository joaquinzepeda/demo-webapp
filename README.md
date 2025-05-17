# Demo WEBAPP – React + Vite

![Demostración de la App](Video_demostracion/demo.gif)

Proyecto demo de la WebApp **RecuperaMás**. Lo ideal habría sido realizar un breve borrador o *mockup* en Figma (u otra plataforma similar) antes de comenzar a codificar, definiendo la paleta de colores y los requerimientos básicos. Sin embargo, dado que se trata de una demo, opté por una implementación más minimalista.

Creé un código base funcional, pero con amplio margen de mejora. Además, en este repositorio incluí un video de demostración para observar su funcionamiento sin necesidad de ejecutarlo localmente.

> **IMPORTANTE:** Para iniciar sesión basta con ingresar un correo cualquiera y cualquier contraseña.

---

## 🎨 Paleta de colores

Extraje los colores principales de la página original: azul oscuro en la barra de navegación, fondo blanco y algunos tonos morados intercalados. También incluí algunas imágenes útiles directamente desde la misma fuente.

---

## 🛠️ Stack tecnológico

Utilicé **React + Vite**, junto con **Tailwind CSS** para el diseño y librerías como **Chart.js** y **react-chartjs-2** para la visualización de datos:

- **React** – Biblioteca principal para construir la interfaz.
- **Vite** – Bundler ultrarrápido para desarrollo con React.
- **Chart.js + react-chartjs-2** – Para la visualización de métricas.
- **Tailwind CSS** – Para un diseño moderno y responsivo.
- **React Icons** – Íconos visuales para mejorar la experiencia de usuario.

---

## ▶️ Instrucciones para ejecutar

### 🔧 Ejecutar de forma local

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


   
