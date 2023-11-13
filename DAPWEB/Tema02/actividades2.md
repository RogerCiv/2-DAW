# Actividades.


## Desplegar las aplicaciones vistas en los puntos 8.2 y 8.3 (añadir acceso mediante HTTPS).


### MOODLE

**Paso 1:**

>Nos vamos a la documentación de Moodle y nos descargamos la version 4.3. Añadimos al archivo hosts la ip y dirección.

![hosts](Ejercicio7/HOSTS.png)


**Paso 2:**

>Creamos el archivo moodle. Reiniciamos apache, habilitamos el sitio y le damos permisos a los directorios.

![tiendaCOnf](Ejercicio6/Moodle2.png)

**Paso 3:**

> Una vez todo habilitado, entramos en la direccion de tienda-virtual.conf y nos aparecerá la instalación de moodle.

![moodle0](Ejercicio6/Moodle4.png)

![moodle0.2](Ejercicio6/Moodle5.png)

![moodle1](Ejercicio6/20231109_09h59m07s_grim.png)

![moodle2](Ejercicio6/20231109_10h03m01s_grim.png)

![moodle3](Ejercicio6/20231109_10h04m03s_grim.png)

![moodle4](Ejercicio6/20231109_10h04m25s_grim.png)


**Paso 4:**

>Una vez instalado, faltaria crear el usuario y moodle.

![moodle5](Ejercicio6/20231111_18h00m44s_grim.png)

![moodle6](Ejercicio6/20231111_18h08m39s_grim.png)


### OPENCART

**Paso 1:**

>Clonamos el repositorio de Opencart. Añadimos al archivo HOSTS la ip y nombre de la página. Creamos el archivo .conf

![conf](Ejercicio6/Paso2.png)


**Paso 2:**

> Le damos los permisos al directorio, habilitamos el sitio, reiniciamos apache. Entramos en la dirección de tienda y nos aparecerá la instalación de OpenCart.

![paso2](Ejercicio6/Paso5.png)


**Paso 3:**

>Instalamos siguiendo los pasos.

![paso3](Ejercicio6/Paso5b.png)

![paso3](Ejercicio6/Paso5c.png)

![paso3](Ejercicio6/Paso5d.png)

![paso3](Ejercicio6/Paso5e.png)


### Version con SSL de ambos sitios

**Paso 1:**

> En cada sitio, debemos cambiar la configuración de config.php y añadir a la dirección, la "s" a http.

![opencart](Ejercicio7/OpenCART.png)

![opencart2](Ejercicio7/OPENCART2.png)






## Desplegar Symfony tanto en Windows como en Ubuntu.

**Paso 1:**

> Modificamos el archivo php.ini con los parametros del pdf. Reiniciamos el apache2. Descargamos la última versión de Composer. Nos vamos a /var/www/html y descargamos symfony: `sudo composer create-project symfony/website-skeleton web`. Le damos permisos a los directorios. Creamos el archivo web-s5.local


![conf](Ejercicio7/SymfonyCOnf.png)


**Paso 2:**

> Ya lo tendriamos instalado, entramos a la dirección y lo comprobamos

