# Actividades Unidad 02

## 1.Configurar un host virtual basado en nombres denominado daw02 que permita el acceso a una página web localizada en el directorio todo-daw02. Hacerla accesible a través de las siguientes URL que identifican a la empresa: www.daw02.local y daw02.local.

**Paso 1:**

>Modificamos el host de nuestra máquina local

![hosts](20231019_09h08m52s_grim.png)


**Paso 2:**

>Creamos el directorio para daw02.local sudo mkdir -p /var/www/html/todo-daw02/public_html

![mkdir tododaw](CapturaTodoDawCarpeta.png)


**Paso 3:**

>Creamos el index.html para dicho dominio

![index](indexHtml.png)


**Paso 4:**

> Damos permisos al usuario www-data sudo chown -R www-data: /var/www/html/todo-daw02

![permisos](permisostododaw.png)


**Paso 5:**

>Creamos el archivo de conf para el dominio sudo nano /etc/apache2/sites-available/daw02.local.conf


![dominio](CorregidoLocalConf.png)


**Paso 6:**

> Habilitamos el sitio con  sudo a2ensite  y realizamos el configTest

![a2ensite configtest](enableSiteDawAndConfigTest.png)


**Paso 7:**

>Desde el navegador de nuestra máquina principal entramos a la dirección daw02.local

![daw02.local](20231019_09h08m28s_grim.png)



# 2.Permitir el protocolo HTTPS en el host virtual daw02 y comprobar que funciona.


**Paso 1:**

> Activamos el modulo SSL a2enmod ssl y reiniciamos apache2. Instalamos openssl. Creamos el certificado y lo autofirmamos.

![autofirma](Ejercicio3img/SSLDAW02.png)

![autofirma](Ejercicio3img/AutofrimaDAW02.png)


**Paso 2:**

>Creamos el archivo para el sitio daw02-ssl. y añadimos el certificado y la clave privada.


![creacion ssl](Ejercicio3img/SSLVIRTUALHOSTDAW02conf.png)


**Paso 3:**

> Habilitamos el soporte SSL y el sitio daw02-ssl. Reiniciamos apache.

![enable](Ejercicio3img/enableDAW02SSL.png)


**Paso 4:**

> En nuestra máquina entramos en la dirección de la pagina con https://

![web](Ejercicio3img/20231023_11h05m11s_grim.png)

>Aceptamos y veremos la web.

![web2](Ejercicio3img/20231023_11h07m32s_grim.png)