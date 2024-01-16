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









<br>usuario - total jugadas - ganadas - perdidas - porcentaje victorias - porcentaje derrotas<br>
{% for user in users %}
    {% set totalGames = user.games|length %}
    {% set totalWins = wins[user.id] %}
    {% set totalLosses = totalGames - totalWins %}
    
    {{ user.username }} - {{ totalGames }} - {{ totalWins }} - {{ totalLosses }} - 
    {{ totalGames > 0 ? (totalWins / totalGames * 100)|number_format(2) : 0 }}% - 
    {{ totalGames > 0 ? (totalLosses / totalGames * 100)|number_format(2) : 0 }}% <br>
{% endfor %}

El usuario con más partidas es: {{userWhitMoreGames.username }} con {{ userWhitMoreGames.total_games }}
<br>
El usuario con más victorias es: {{userWhitMoreWins.username }} con {{ userWhitMoreWins.total_wins }}
<br>
El usuario con más perdidas es: {{userWhitMostLostGames.username }} con {{ userWhitMostLostGames.total_lost_games }}
<br>


newGame:

{% extends 'base.html.twig' %}

{% block title %}New Game{% endblock %}

{% block body %}
    <h1>Partida !!!</h1>

 <div class="container text-center">
   <h1> Estas son tus cartas:</h1>
 <div class="row">
    {% for card in game.player1hand %}
    <div class="col">
 <br>
<a href="{{ path('app_game_play', {'gameId': game.id, 'cardId': card.id}) }}"> <img src="/uploads/image/{{card.img}}" width="150px"/></a><br>
    </div>
    {% endfor %}

</div>
    <a href="/">Volver a Inicio </a>
    <a href="{{ path('app_game_index') }}">back to list</a>
</div>
{% endblock %}



result:

{% extends 'base.html.twig' %}

{% block title %}New Game{% endblock %}

{% block body %}
    <h1>El ganador es !!!</h1>

    {% if game.winner == 1 %}
        Has ganado!
        {% else %}
     Has perdido, ganó la machine!
    {% endif %}
    
       <a href="{{ path('app_game_new') }}">Juega otra vez</a>
         <a href="/">Volver a Inicio </a>
    <a href="{{ path('app_game_index') }}">back to list</a>
{% endblock %}
