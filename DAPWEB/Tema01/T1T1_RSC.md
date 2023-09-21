# Ejercicios Tema 01

## 1) Una plataforma web es el entorno de desarrollo de software empleado para diseñar y ejecutar un sitio web; destacan dos plataformas web: LAMP y WISA. Explica en qué consiste cada una de ellas. ¿Qué otras plataformas existen?

 **LAMP:** Trabaja con software libre, LAMP viene de las iniciales de :
 - **Linux:** Sistema operativo.
 - **Apache:** Servidor web.
 - **MySQL/MariaDB:** Gestor de bases de datos.
 - **PHP:** lenguaje interpretado PHP, (en algunos casos puede ser Perl o Python).

**WISA:** Usa las herramientas propietarias de Microsoft.

 - **Windows:** Sistema operativo.
 - **Internet Information Services:**: Servidor web.
 - **SQL Server:** Gestor de base de datos.
 - **ASP o ASP.NET:** Lenguaje Scripting del lado del servidor.

 Existen otras plataformas como **WAMP**, que viene ser como **LAMP** pero cambiando el S.O por windows, o **WIMP** que seria cambiar Apache por Internet information Services.

 ## 2) ¿Qué diferencias y similitudes encuentras entre la escalabilidad horizontal y en clúster?

 - **Diferencias:**

La Escabilidad horizontal se centra en agregar más nodos para aumentar la capacidad, en clúster se enfoca en la creación de grupos de nodos que trabajan juntos  dandole más robustez.

- **Similitudes:**

Ambas buscan aumentar la capacidad. Distribuir la capacidad de trabajo. Mejorar la disponibilidad y rendimiento.

## 3) La arquitectura Web es un modelo compuesto de tres capas, ¿cuáles son y cuál es la función de cada una de ellas?

- **Capa presentación:** La encargada de la navegavilidad, formateo de los datos de salida, validación de los datos, etc... Es la capa que ve el usuario.

- **Capa de negocio:**  recibe las peticiones del usuario y desde donde se envían las respuestas, se verifica que las reglas establecidas de cumplan (controlador).

- **Capa de acceso de datos:**  formada por gestores de datos que se encargan de almacenar, estructurar y recuperar los datos solicitados por la capa anterior (modelo).

## 4) Sigue los pasos del Anexo I y crea la máquina virtual de Ubuntu Server 20.04 en VirtualBox. Documenta el proceso seguido e incluye capturas de pantalla que muestren que has realizado la tarea.

- **Paso 1:**
> Elegimos instalar la versión de Ubuntu server por defecto.

![Imagen 1](Paso1.png)
- **Paso 2:**
>Al estar en virtualbox la configuración de la máquina virtual en adaptador puente, nos coge una ip por defecto de la misma red local en la que se encuentra nuestro equipo.

![Imagen 2](Paso2.png)
- **Paso 3:**
> Mirrors por si acaso no descarga del servidor principal.

![Imagen 3](Paso3.png)
- **Paso 4:**
> Seleccionamos nuestro HDD por defecto.

![Imagen 4](Paso4.png)

- **Paso 5:**
> Dejamos las particiones que ha creado por defecto.

![Imagen 5](Paso5.png)

- **Paso 6:**
> Rellenamos los campos.

![Imagen 6](Paso6.png)

- **Paso 7:**
> Instalamos SSH para luego poder manejar nuestro servidor desde nuestra máquina mediante ssh.

![Imagen 7](Paso7.png)

- **Paso 8:**
> Final de la instalación, con el ubuntu server iniciado.

![Imagen 8](Paso8.png)