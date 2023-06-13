# Instrucciones

Bienvenido al mini proyecto del nivel 2. En este proyecto estaremos aplicando los conocimientos adquiridos tanto en el nivel 1 como lo que estás aprendiendo actualmente en el nivel 2. Sigue las instrucciones de este archivo para completar el proyecto y ten en cuenta que estas mismas instrucciones se tomarán en cuenta para la evaluación del proyecto.

## Instrucciones generales

Una nueva empresa en el sector de viajes llamada **windbnb** ha solicitado tu ayuda para crear una aplicación web que permita a los usuarios buscar y filtrar alojamientos en diferentes lugares. El diseño de la aplicación web ya está terminado y ahora necesita que lleves a codigo este proyecto. Por suerte, ya tienes una base de código que puedes utilizar para comenzar a trabajar. Según las instrucciones que el cliente nos ha dado, te daré las instrucciones para completar el proyecto.

El Figma del proyecto se encuentra en el siguiente enlace: [Windbnb](https://www.figma.com/file/KGNH8dbclXT1vzXLyPrBeu/Windbnb?node-id=0-1)

## Instrucciones del proyecto

### Layout | Diseño

El diseño responsive para esta página web es opcional. Para lograr esto, el cliente y tu han acordado que de manera opcional se podrá trabajar con la librería de Bootstrap 5. Si no es el caso, puedes utilizar únicamente CSS.

Dentro del archivo Figma verás que hay 2 vistas principales: **Mobile** y **Desktop**. Como ya te mencioné, el diseño responsive es opcional, por lo cual si gustas puedes hacer la vista mobile; si no, con la vista Desktop es suficiente. Sin embargo, hacer la vista responsive podría sumar puntos a tu calificación final.

### Fuentes

Las fuentes para este proyecto las hemos traido de [Google Fonts](https://fonts.google.com/). Debes importar las fuentes a usar en el proyecto como ya lo hemos aprendido en clase. Recuerda que para usarlas desde CSS, puedes utilizar la siguiente sintaxis:

```css
font-family: 'Montserrat', sans-serif; /* Fuente principal */
font-family: 'Mulish', sans-serif; /* Fuente secundaria */
```

### Iconos

Para los iconos, utilizaremos la librería de iconos de Google: [Material Icons](https://fonts.google.com/icons). Para usarlos puede seguir el enlace anterior y buscar el icono que necesite. Una vez que lo encuentre, copie el código que se le proporciona y peguelo en el HTML. Por ejemplo:

```html
<i class="material-icons-sharp">favorite</i>
```


## Código base

Nosotros ya hemos creado un proyecto de React JS y lo hemos modificado para que puedas empezar a trabajar en tu proyecto sin problemas. Este contiene un código base, el cual eres libre de modificar a tu gusto. Sin embargo, recuerda que es una guía para empezar tu proyecto. Empecemos descargando el código de dicho proyecto de React:

- Primer paso: Descargar el repositorio de GitHub. Para esto debes dirigirte al botón verde de arriba a la derecha del repositorio que dice `<> Code` y dar click. Allí te aparecerá una opción que diga `Download ZIP`. Eso te descargará los archivos del repositorio.

- Segundo paso: Descomprimes el archivo ZIP descargado.

- Tercer paso: Una vez descargado el código, debes ingresar a la carpeta descargada que contiene los archivos del proyecto y ejecutar en la terminal el comando que te muestro a continuación. Cabe resaltar que este comando está instalando los archivos faltantes a tu proyecto de React. Si no lo haces, el proyecto te generará errores.

```
npm install
```

Una vez descargado o clonado los archivos del repositorio y ya habiendo ejectuado el comando `npm install`. Ahora pasaré a explicarte lo que este contiene:

- En la carpeta principal y en la carpeta "public" tienes un archivo llamado `stays.json`, el cual no debes modificar en ningún momento. Este te sirve como el archivo que contiene la información que luego mostrarás en tus componentes de React. Recuerda que no debes modificar ni borrar este archivo de la carpetas en las que se encuentra.

- En tu archivo `App.jsx` te he colocado un código base que te sirve para traer la información del archivo `stays.json`. Te he dejado unos comentarios allí explicándote qué hace cada línea. Sin embargo, eres libre de modificar dicho código o incluso borrar los comentarios. Solo recuerda que es una guía que te facilitará traer los datos de `stays.json`.

- En la carpeta `src` tienes otra carpeta con el nombre `img`, la cual contiene los logos que utilizarás en tu proyecto.

*Tip*: Recuerda utilizar la consola del navegador para ver los datos que traes del archivo `stays.json`.


## Consideraciones para la calificación

A continuación te diremos cuales son los puntos que se tomarán en cuenta para la calificacion del proyecto:

- El diseño debe ser lo más fiel posible al proporcionado en el archivo Figma.
- Los colores, fuentes, tamaños de letra, etc. deben ser los proporcionados en el archivo Figma.
- Los datos deben ser obtenidos del archivo `stays.json` y no deben ser escritos a mano.
- El proyecto debe ser estructurado de forma que sea fácil de entender y mantener.
- El proyecto debe ser publicado en GitHub Pages.
- El proyecto debe tener más de un commit.
- El proyecto debe ser subido a GitHub y el enlace debe ser enviado para su revisión.

#### Consideraciones opcionales que también podrían sumar puntos:
- El diseño debe ser 100% responsive.
- El proyecto debe ser desarrollado con Bootstrap 5. Para los estilos **que no se puedan** lograr con Bootstrap, puedes utilizar CSS puro.