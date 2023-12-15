# Comandos para symfony

## Crear proyecto web
symfony new --webapp nombre_proyecto

## Añadir base datosa .env
DATABASE_URL="mysql://root:test@127.0.0.1:3306/NombreBaseDatos"

## Básicos
- php bin/console doctrine:database:create
- php bin/console make:entity
- php bin/console make:migration
- php bin/console doctrine:migrations:migrate
- php bin/console make:controller  
- php bin/console make:crud

## Iniciar servidor

symfony server:start
symfony serve

## Seguridad

php bin/console make:user
php bin/console make:auth
php bin/console make:registration-form


## Cuando se hace relacion entre varias entidades a veces falla

php bin/console doctrine:schema:update --force
php bin/console cache:clear
