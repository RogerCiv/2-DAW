#

## 1.Mecanismos necesarios para construir un ambiente de aplicación de propósito general

- Modelo estándar de nombres:
todos los servidores, así como el contenido de la web se denominan según un Localizador Uniforme de Recursos (Uniform Resource Locator o URL).
- Contenido: 
a todos los contenidos en la web se les especifica un determinado tipo permitiendo de esta forma que los navegadores los interpreten correctamente.
- Formatos de contenidos estándar: 
todos los navegadores soportan un conjunto de formatos estándar, como por ejemplo HTML, CSS, JavaScript, etc.
- Protocolos estándar: 
éstos permiten que cualquier navegador pueda comunicarse con cualquier servidor web. Los más usados en la web son HTTP (HyperText Transfer Protocol) y HTTPS (HyperText Transfer Protocol Secure) que operan sobre el conjunto de protocolos TCP/IP.


## 2.Aspectos generales a destacar en una arquitectura web.

- Escalabilidad: 
posible incremento vertiginoso del número de usuarios, por lo que es importante el correcto dimensionamiento de la aplicación y la adaptabilidad del sistema ante el incremento de demanda.
- Separación de responsabilidades: 
premisa base para la separación de capas (independencia de capas). La tendencia actual en aplicaciones web (arquitectura de n-capas). Modelo más básico es el de tres capas: acceso a datos, presentación y negocio (MVC).
- Portabilidad: 
una aplicación web debe poder adaptarse a las distintas arquitecturas físicas posibles en el despliegue. Las tareas de adaptación a un nuevo entorno deben limitarse al ámbito de la configuración, no del desarrollo.
- Utilización de componentes en los servicios de infraestructura: 
componentes independientes del dominio. Dan lugar a la capa de infraestructura (servicio de log, pool JDBC, sistema de configuración, gestor de permisos de acceso, etc.).
- Gestión de las sesiones del usuario: 
es un aspecto muy delicado del sistema. Cacheado de entidades en sesiones de usuario y contextos de la aplicación.
- Aplicación de patrones de diseño: 
aceleran el desarrollo de aplicaciones y facilitan el mantenimiento.


## 3. Tecnologías asociadas a las aplicaciones web.

- ASP (Active Server Pages): 
las páginas Activas se ejecutan del lado del servidor, de este modo se forman los resultados que luego se mostrarán en el navegador de cada equipo cliente que ha realizado la solicitud. Un buen ejemplo de ello son los buscadores, donde un usuario realiza una petición de información y el servidor entrega un resultado a medida de la petición. Existen versiones de ASP para Unix/Linux, a pesar de que fue una tecnología desarrollada por Microsoft para la creación dinámica de páginas web ofrecida junto a su servidor IIS (Internet Information Services).

- CGI (Common Gateway Interface o Interfaz de entrada común): 
es uno de los estándares más antiguos en Internet para trasladar información desde una página a un servidor web (permite a un navegador web solicitar datos de un programa ejecutado en un servidor web). Este estándar es utilizado para bases de datos, motores de búsqueda, formularios, generadores de email automáticos, foros, comercio electrónico, rotadores y mapas de imágenes, juegos en línea, etc.Las rutinas de CGI son habitualmente escritas en lenguajes interpretados como Perl o en lenguajes compilados como C.
- CSS (Cascading Style Sheets): 
se usa para formatear las páginas web; se trata de separar el contenido de un documento de su presentación. Cualquier cambio en el estilo marcado para un elemento en el CSS afectará a todas las páginas vinculadas a ese CSS.

- Java: 
este es un lenguaje que trabaja en el cliente, es decir se ejecuta en el navegador del equipo cliente y no en el servidor. Es un lenguaje eficiente y muy poderoso, que se caracteriza por:
  - Una misma aplicación puede funcionar en diversos tipos de ordenadores y sistemas operativos: Windows, Linux, MacOS, etc., así como en otros dispositivos inteligentes.
  - Los programas Java pueden ser aplicaciones independientes (que corren en una ventana propia) o applets (pequeños programas interactivos que se encuentran incrustados en una página web y pueden funcionar con cualquier tipo de navegador).
  - Se trata de un lenguaje orientado a objetos. Esto significa que los programas se construyen a partir de módulos independientes, y que estos módulos se pueden transformar o ampliar fácilmente.
  - Desarrollado por la empresa Sun Microsystems, pero posteriormente liberado bajo licencia GNU GPL, con lo cual es un software libre. Aunque finalmente ha sido comprado por Oracle.
- JavaScript: 
lenguaje que se interpreta y se ejecuta en el cliente. Útil para realizar tareas como mover imágenes por la pantalla, crear menús de navegación, utilizar algunos juegos, etc. En las páginas web suele preferirse JavaScript porque es aceptado por muchos más navegadores que VBScript (creado por Microsoft).
- PHP (Hypertext Preprocessor): 
este lenguaje es ejecutado en el lado del servidor. PHP es similar a ASP y puede ser usado en circunstancias similares. Es muy eficiente, permitiendo el acceso a bases de datos empleando servidores como MySQL/MariaDB y, por lo tanto, suele utilizarse para crear páginas dinámicas complejas.
- VBScript (Visual Basic Scripting): 
respuesta de Microsoft a JavaScript. Es una buena herramienta para cualquier sitio destinado a ser mostrado exclusivamente en los navegadores de Microsoft. El código en VBScript puede, además, estar diseñado para su ejecución en el lado del cliente o en el del servidor, la diferencia es que un código que se ejecuta en el lado del servidor no es visible en el lado del cliente (recibe los resultados, pero no el código).

## 4.Clasificación de las aplicaciones web según el contenido que pretende mostrar.

- Página web estática: 
están implementadas en HTML y pueden mostrar en alguna parte de la página objetos en movimiento tales como banners, GIF animados, vídeos, etc. Es el primer tipo de páginas web que se crearon desde el origen de la web (~1991) y del que todavía se pueden encontrar casos en Internet. No variarán en su forma ni en su contenido mientras su desarrollador no modifique el código de la página.

- Página web animada: 
se realizan con la tecnología Flash; ésta permite que una página web presente el contenido con ciertos efectos animados continuados. El uso de esta tecnología permitía diseños más vanguardistas, modernos y creativos. Sus talones de Aquiles en cuanto a seguridad, parcialmente de gran gravedad, han tenido como consecuencia que los fabricantes de los navegadores más importantes recomienden la desactivación inmediata del plugin.

- Página web dinámica: 
las aplicaciones web dinámicas son mucho más complejas a nivel técnico. Utilizan bases de datos para cargar la información y su contenido se actualiza cada vez que el usuario accede a la web. Existen muchos lenguajes de programación para el desarrollo de aplicaciones web dinámicas. Los lenguajes PHP y ASP son los más comunes porque permiten una buena estructuración del contenido.

- Portal web: 
es un sitio web que en su página principal permite el acceso a múltiples secciones que, por lo general, son foros, chats, cuentas de correo, buscador, acceso registrado para obtener ciertas ventajas, las últimas noticias de actualidad, etc.

- Tienda virtual o comercio electrónico: 
sitio web que publica los productos de una tienda en Internet. Permite la compra on-line a través de tarjeta de crédito, domiciliación bancaria o transferencia bancaria en general. Ofrece al administrador un panel de gestión para poder subir los productos, actualizarlos, eliminarlos, etc.

- Página web con "Gestor de Contenidos":
se trata de un sitio web cuyo contenido se actualiza a través de un panel de gestión por parte del administrador del sitio. Este panel de gestión suele ser muy intuitivo y fácil de usar. En aquellas páginas web que requieran una actualización constante, se suele incorporar este panel de gestión para que la web pueda controlarse día a día por parte del cliente. Algunos ejemplos de gestores de contenidos son: WordPress, Joomla y Drupal.



## 5. Capas establecidas en una aplicación web.

- Capa de presentación es la encargada de la navegabilidad, validación de los datos de entrada, formateo de los
datos de salida, presentación de la web, etc.; se trata de la capa que se presenta al usuario (vista).
- Capa de negocio es la que recibe las peticiones del usuario y desde donde se le envían las respuestas; en
esta capa se verifican que las reglas establecidas se cumplen (controlador).
- Capa de acceso a datos es la formada por determinados gestores de datos que se encargan de almacenar,
estructurar y recuperar los datos solicitados por la capa de negocio (modelo).



## 6. Modelos arquitectónicos de las aplicaciones de Internet.

- Modelo 1: Aplicaciones CGI.
  - Las más primitivas.
  - Las aplicaciones se diseñan en un modelo web CGI, basadas en la ejecución de procesos externos al servidor web, cuya salida por pantalla era el HTML que el navegador recibía en respuesta a su petición.
  - Presentación, negocio y acceso a datos se confundían en un mismo script.
  - El estado se almacena en el cliente y cada petición supone una ejecución completa independiente de estado.
  
- Modelo 1.5: Páginas Dinámicas + Clases.
  - Aplicado a la tecnología Java, se da con la aparición de las páginas JSP y los servlets (clase en el lenguaje de programación Java, utilizada para ampliar las capacidades de un servidor).
  - Separación de responsabilidades:
    - Páginas dinámicas llevan la lógica de presentación (navegabilidad, visualización, etc.).
    - Clases incrustadas asumen las responsabilidades de negocio y acceso a datos.
  
- Modelo 2: MVC.
  - Evolución del modelo 1.5
  - Incorporación del patrón de diseño MVC.
    - Controlador: Navegación.
    - Negocio y Datos: Clases.
    - Presentación: Páginas.
- Modelo 2X: Aplicaciones Multicanal.
  - Aparecen con el objetivo de dar respuesta a la necesidad, cada vez más habitual, de desarrollar aplicaciones multicanal, es decir, aplicaciones web que pueden ser atacadas desde distintos tipos de clientes remotos. Así, una aplicación web multicanal podrá ejecutarse desde una PDA, desde un terminal de telefonía móvil, o desde cualquier navegador HTML estándar.
  - El medio para lograr publicar la misma aplicación para distintos dispositivos es emplear plantillas XSL para transformar los datos XML.


## 7. Componentes básicos de una plataforma web.

1. El sistema operativo, bajo el cual opera el equipo donde se hospedan las páginas web y que representa la base
misma del funcionamiento del ordenador. En ocasiones limita la elección de otros componentes.
2. El servidor web es el software que maneja las peticiones desde equipos remotos. En el caso de páginas
estáticas, el servidor web simplemente provee el archivo solicitado, el cual se muestra en el navegador. En el
caso de sitios dinámicos, el servidor web se encarga de pasar las solicitudes a otros programas que puedan
gestionarlas adecuadamente.
3. El gestor de bases de datos se encarga de almacenar sistemáticamente un conjunto de registros de datos
relacionados para ser usados posteriormente.
4. Un lenguaje de programación interpretado que controla las aplicaciones de software que corren en el sitio web.


## 8.¿Qué es un servidor web? ¿y un servidor de aplicaciones? ¿qué diferencias existen entre ellos?

- Un servidor web es un programa que se ejecuta de forma continua en un ordenador, se mantiene a la espera de peticiones por parte de un cliente (un navegador web) y contesta a estas peticiones de forma adecuada, sirviendo una página web que será mostrada en el navegador o mostrando el mensaje correspondiente si se detectó algún error.

- Un servidor de aplicaciones es un software que proporciona aplicaciones a los equipos o dispositivos cliente, por lo general, a través de Internet y utilizando el protocolo HTTP. 


Los servidores de aplicación se distinguen de los servidores web en el uso extensivo del contenido dinámico y por su frecuente integración con bases de datos.




