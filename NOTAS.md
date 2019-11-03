
# Curso Básico de Node.js

## Clase 1 - Pre-requisitos

[Clase 1](https://platzi.com/clases/1380-basico-nodejs/14687-antes-de-empezar-el-curso/)

Este programa está diseñado para impartir al estudiante los conceptos básicos sobre el uso de NodeJs, para el desarrollo de aplicaciones de red.

¿Qué necesitas saber antes de comenzar este curso?

- Tener un entendimiento básico del lenguaje JavaScript y variantes de ECMAScript
- Tener un entendimiento básico de patrones de desarrollo en JavaScript
- Noción del manejo de sistemas Unix

Si te falta aprender o estudiar alguno de estos temas. Toma ese curso y regresa con nosotros, te esperaremos aquí.

### Aprenderemos

- Dominio básico de Node.js y capacidad para administrar tus proyectos de Node.js.
- Destreza en el uso de utilitarios de trabajo de Node.js (node, npm y npx).
- Entendimiento de programación de aplicaciones de servidor.

### Por qué utilizaremos una máquina virtual

Utilizaremos una maquina virtual para desarrollar Node en su ambiente más utilizado, es decir: Linux.

## Clase - Introducción

Binding: Enlaza javascript con c++/c , para poder usar sus librerias como el LIBUV que se encarga del asincronismo .
Event Loop:
Es como un while + mas un stack , que va tomando los elementos del stack por su cola.

### Sistema de Node.js

#### Aplicaciones de Node.js <==> V8 (Motor JS)

#### Enlaces de Node.js (Bindings)

- Enlaza javascript con c++/c, para poder usar sus librerias como el LIBUV que se encarga del asincronismo

#### LIBUV

- Cola de eventos
- Bucle de eventos
- Operación de bloqueo
- Ejecución de retorno
- Hilos de procesos / Workers

## Historia de Node.js

Por ejemplo google Chrome tiene su propio motor, que es el v8 que ejecuta linea a linea javascript. Cuando el v8 fue liberado como código abierto el creador de NoderJs que fue Ryan Dahl, usó ese código para poder interpretador JavaScript en otros entornos que no fuera el navegador web.

Los clientes webs más populares son V8 de Chrome, Chakra de Edge y SpiderMonkey de Firefox. Cada uso interpreta el código a su manera pero siguen un estándar para no llegar a cosas tan diferentes.

Node usa V8 por que fue liberado y además es muy bueno haciendo su trabajo sobre JavaScript, está escrito en c++ que es una ventaja.

## Arquitectura de Node.js

[Clase 5](https://platzi.com/clases/1380-basico-nodejs/14136-historia-de-nodejs/)

### Desde el nivel mas alto al mas bajo encontramos:

- Aplicación NodeJS
- Librería estándar de NodeJS (API)
    Enlaces de Node (Bindings)
    Bindings: Enlaces que existen entre el código javascript y los módulos en más bajo nivel
    V8: Motor javascript y Librerias c/c++
    LIBUV: librería que se encarga de manejar el bucle de eventos

## Sistema de Node.js - Basado en Chrome V8

Primero, cuando el código es escrito en la aplicación node.js, utiliza el motor de chrome V8 para interpretar el código que escribimos, eso va a generar un comportamiento en nuestro equipo, luego para que ocurra, V8 tiene que hacer uso de los enlaces (Bindings) para hacer uso del lenguaje C. La librería más famosa es la de LIBUV, es la que se encarga de manejar el segmento crítico del funcionamiento de node, que es el bucle de eventos.

Cada vez que entra una linea de código se genera una instancia en esta cola de eventos, y el bucle sigue funcionando infinitas veces mientras node esté en ejecución, muy parecido a un while, y así va tomando todas las tareas que están en la cola y las va cumpliendo llevándolos a las instancias necesarias parCura poder ejecutarlas correctamente. Luego devuelve la respuesta al motor V8 que se encarga de hacer los ajustes necesarios antes de presentar los resultados finales.

## Bucle de Eventos

- Timers: Es la etapa que maneja los temporizadores de JavaScript, como por ejemplo setTimeout y el resto de familias de temporizadores.
- Pending Callbacks: Ejecuta los Callbacks que están pendientes.
- Ide.prepare: Usado en el estado interno de Node.
- poll: Es el más importantes dado que es el que se comunica con las otras librerías en C que son las que se encargan del ciclo de eventos, y es aquel que se encargan del realizado o decirle al controlador de red, por ejemplo, que haga una petición de red y recibe la respuesta de la llamada.
- Check: De Verificación.
- Close callbacks: Que cierra aquellos Callbacks que han sido culminados.

## Caso de Uso

Node.js obtiene su máximo provecho en desarrollo de aplicaciones de red. Dependiendo de su implementación estas pueden ser: NRTA (Non.Real time Application) RTA (Real Time Applications)

NRTA: por ejemplo, hay muchas variedades, como las clásicas aplicaciones echas en javascript. Como aplicaciones de servidor, que trabajan con el modelo de arquitectura cliente-servidor.

RTA: Son aquellas que crean canales bidireccionales de comunicación y que con un poco más persistentes. En las que el cliente realiza una petición especifica al servidor, esperando una sola respuesta. Generalmente también son arquitecturas cliente-servidor donde hay un modelo de petición y respuesta.

## Creación de máquina virtual de trabajo 

En este curso utilizaremos una maquina virtual para desarrollar Node en su ambiente más utilizado, es decir: Linux.

En este curso usamos Oracle VM Virtual Box, porque es gratuito y funciona tanto en Windows como en Mac. Pero puedes usar el que prefieras.

[Link a Virtual Box](https://www.virtualbox.org/)

## Instalación de recursos de proyecto en MacOSX

En las próximas clases te enseñamos a instalar NodeJs con un computador Windows. Pero si tu tienes un computador MacOSX, en esta lectura podrás encontrar cómo instalarlo.

Para el desarrollo del curso, instalaremos los siguientes aplicativos en nuestro sistema:

- Node.js 8.12.X
- Visual Studio Code

### Instalación de Node y NPM con NVM

NOTA: Esta instalación hace uso de brew.

Para realizar la instalación de Node.js, es recomendado usar un manejador de versiones como NVM. Existen diferentes alternativas pero esta es relativamente simple de instalar y utilizar. En primera instancia, ejecute los siguientes comandos en su Terminal para actualizar e instalar NVM:

```bash
brew update
brew install nvm
mkdir ~/.nvm
nano ~/.bash_profile
```

El último comando creará y abrirá un nuevo archivo para su perfil de bash. En el mismo, necesitaremos agregar lo siguiente:

```bash
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

Una vez guarde y cierre el fichero .bash_profile, necesitará reiniciar su Terminal para que se ejecute el código de su nuevo archivo de perfil de bash. De manera opcional, si no desea cerrar su terminal, puede ejecutar esto también:

```bash
source ~/.bash_profile
echo $NVM_DIR
```

// Tuve que agregarlo al .bashrc para que funcionara nvm

Esto deberá ejecutar su fichero `.bash_profile` y permitirle ver la variable de entorno asignada a NVM. Si quiere revisar su versión de NVM instalada, ejecute:

`nvm --version`

Instalación de Node.js
Con NVM instalado, ejecute en una nueva terminal el siguiente comando para instalar la última versión de Node.j`s:

`nvm install --lts`

Esto procederá a instalar la última versión LTS (Soporte a largo plazo) de Node.js disponible. Al tiempo de escribir este tutorial, fue la versión 8.12.0 para Node.js.

Con esto listo, puede corroborar el funcionamiento de Node.js en su terminal ejecutando el siguiente comando para confirmar su versión:

`node -v`

Esto deberá devolverle en su terminal el número de versión de Node.js que tenga instalado.

NOTA: Si desea tener más información sobre el uso de NVM y sus funcionalidades, por favor referirse a su repositorio:

[Node Version Manager Repo](https://github.com/creationix/nvm)

## Visual Studio Code

Para instalar VS Code, es necesario realizar lo siguiente:

- Descargar del sitio oficial de Visual Studio Code la última versión para MacOS del utilitario:

[Visual Studio Code Download](https://code.visualstudio.com/docs?dv=osx)

- Una vez descargado, hacer doble clic sobre el elemento descargado para expandir su contenido.

- Arrastrar Visual Studio Code.app al directorio de aplicaciones, de modo que quede disponible en el Launchpad.

- (OPC) Añadirlo al Dock haciendo clic derecho y seleccionando “Options -> Keep in dock”.

Después de instalar VS Code, puede configurarse para ser lanzado desde la terminal de la siguiente manera:
Abrir VS Code.

- Abrir la paleta de comandos (⇧⌘P) y escribir ‘shell command‘ para encontrar y ejecutar la tarea Shell Command: Install ‘code’ command in PATH.

- Una vez ejecutada, podrá lanzar VS Code desde un directorio específico con el comando: `code .`

`sudo apt update -y y && sudo apt upgrade -y`

## Clase 9 - Clonar el repo del curso

[Clase 9 URL](https://platzi.com/clases/1380-basico-nodejs/14139-clonacion-de-repositorio-del-curso/)

```bash
git clone https://github.com/platzi/nodejsbasico.git
```

## Clase 10 - Introducción a Node.js: CLI y REPL

[url clase 9](https://platzi.com/clases/1380-basico-nodejs/14140-introduccion-a-nodejs-cli-y-repl/)

- Comando `node` crea una terminal de JavaScript

```bash
> var x = 45 + 23;
undefined
> function name() {
... return "Hola Carlos, bienvenido a node.";
... }
undefined
> name()
'Hola Carlos, bienvenido a node.'
```

- `.exit` termina la ejecución de la consola interactiva.

