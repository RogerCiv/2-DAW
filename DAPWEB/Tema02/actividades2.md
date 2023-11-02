# Actividades.


## 2. Crear el subdirectorio todo-daw02/delimitado teniendo en cuenta que:
## ✓ El directorio todo-daw02 permite el acceso a cualquier usuario.
## ✓ El subdirectorio todo-daw02/delimitado permite el acceso solamente al usuario admin.


**Paso 1:**

> Crear los usuarios y password con htpassword

![htpassword](Ejercicio2/Paso1.png)

<br><br><br><br><br><br><br><br>


**Paso 2:**

> Añadir un nuevo directory al archivo daw02-ssl.conf

![ssl.conf](Ejercicio2/Paso4.png)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br>


**Paso 3:**

> Comprobar con apachectl configtest si esta bien la sintaxis del archivo anterior

![configtest](Ejercicio2/Paso3.png)


**Paso 4:**

> Le damos permisos a la nueva carpeta.

![permisos](Ejercicio2/Permisos.png)


**Paso 5:**

> Entramos a la nueva web de delimitado

![delimitado](Ejercicio2/20231026_11h00m25s_grim.png)


> Una vez hecho el login

![delimitado2](Ejercicio2/20231026_11h00m35s_grim.png)



## Configurar los archivos de registro como sigue:
## ✓ Identificación log de acceso: daw02-access.log.
## ✓ Identificación log de error: daw02-error.log.
## ✓ Alias logformat: combined


**Paso 1:**

> Añadimos los logs para daw02 en el archivo -ssl.conf del sitio y reiniciamos el apache.

![sslCOnf](Ejercicio4/DAW02LOGS.png)


**Paso 2:**

> Comprobamos que han sido creados.

![logs](Ejercicio4/LOGS.png)


**Paso 3:**

> Ahora vamos comprobando el log de access en tiempo real con tail -f.

![access](Ejercicio4/AccessLog.png)


**Paso 4:**

> Comprobamos el log de error en tiempo real con tail -f.

![error](Ejercicio4/ErrorLog.png)



## 5. Rotar logs por intervalo temporal: cada 48 horas

**Paso 1:**

> Modificamos el -ssl.conf

![archivo](Ejercicio5/Paso01.png)

**Paso 2:**:

> vemos los archivos creados nuevos.

![logs](Ejercicio5/Paso1.png)