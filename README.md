# Food Store

## Descripción del proyecto

Food Store es una aplicación frontend desarrollada como parte de la materia Programación III.
Esta instancia esta dedicada a la estrega del primer parcial de dicha materia.
El proyecto consiste en un catálogo de productos de comida donde los usuarios pueden visualizar productos, filtrarlos por categorías, buscarlos por nombre y agregarlos a un carrito de compras.

La aplicación fue desarrollada utilizando:

* HTML5
* CSS3
* JavaScript
* TypeScript
* Vite

El sistema utiliza `localStorage` para almacenar la sesión del usuario y persistir los datos del carrito de compras.

---
## Enlace al video:
(https://youtu.be/gzjVAge74LM)

---
## Funcionalidades implementadas

* Registro e inicio de sesión
* Protección de rutas según el rol del usuario
* Catálogo dinámico de productos
* Búsqueda de productos por nombre
* Filtrado de productos por categorías
* Carrito de compras con persistencia en localStorage
* Cálculo automático del total del carrito
* Eliminación de productos del carrito
* Vaciado completo del carrito
* Navegación entre páginas

---

## Estructura del proyecto

```bash
src/
├── pages/
│   ├── auth/
│   ├── admin/
│   └── client/
│       ├── home/
│       └── cart/
├── types/
├── utils/
├── assets/
└── main.ts
```

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Ingresar al proyecto

```bash
cd proteger_rutas
```

### 3. Instalar dependencias

```bash
pnpm install
```

Si `pnpm` no está instalado:

```bash
npm install -g pnpm
```

### 4. Ejecutar el servidor de desarrollo

```bash
pnpm dev
```

El proyecto se ejecutará en:

```bash
http://localhost:5173
```

---

## Persistencia de datos

La aplicación utiliza `localStorage` para almacenar:

* Usuarios registrados
* Sesión activa
* Carrito de compras

---

## Dificultades encontradas

Durante el desarrollo surgieron algunas dificultades relacionadas principalmente con la organización del proyecto y el manejo de TypeScript.

Uno de los problemas fue comprender cómo estructurar correctamente los tipos (`Product`, `Category`, `CartItem`) y relacionarlos entre sí. En el material teórico se explicaban conceptos básicos, pero no había muchos ejemplos completos aplicados a proyectos reales, por lo que fue necesario investigar y realizar pruebas hasta lograr una estructura funcional.

También hubo dificultades al trabajar con el renderizado dinámico del DOM, especialmente al implementar los filtros por categoría y la búsqueda de productos en tiempo real. En algunos casos los eventos no funcionaban correctamente porque los elementos eran creados dinámicamente desde TypeScript.

Otra dificultad fue configurar correctamente las rutas y páginas dentro de `vite.config.ts`, ya que si una página no se registraba correctamente, no podía navegarse dentro del proyecto.

Estos problemas fueron resolviéndose mediante pruebas, reorganización del código en módulos reutilizables y separando responsabilidades en distintos archivos para mantener una mejor estructura del proyecto.

---

## Autor

Natalia Diaz
Tecnicatura Universitaria en Programación a Distancia
Programación III – 2026
