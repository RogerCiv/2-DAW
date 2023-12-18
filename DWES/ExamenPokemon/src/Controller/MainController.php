<?php

namespace App\Controller;

use App\Entity\Pokemon;
use App\Repository\PokemonRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_main')]
    public function index(): Response
    {
        return $this->redirectToRoute("app_pokemon_index");
        // return $this->render('main/index.html.twig', [
        //     'controller_name' => 'MainController',
        // ]);
    }

    #[Route('/random', name: 'app_random')]
    public function random(PokemonRepository $pokemonRepository): Response
    {

        // $pokemons = $pokemonRepository->findAll();
        // //$pokemon = new Pokemon();
        // $randomIndex = array_rand($pokemons);

        // // Obtener el Pokémon correspondiente al índice aleatorio
        // $randomPokemon = $pokemons[$randomIndex];
        // //dd($pokemons[$randomPokemon]);
         // Obtener todos los Pokémon
         $user = $this->getUser();
    $allPokemons = $pokemonRepository->findAll();
    
    // Obtener los Pokémon en la Pokédex del usuario
    $userPokemons = $user ? $user->getPokemon()->toArray() : [];

    // Filtrar los Pokémon que no están en la Pokédex del usuario
    $availablePokemons = array_diff($allPokemons, $userPokemons);

    // Verificar si hay Pokémon disponibles
    if (empty($availablePokemons)) {
        // Si no hay Pokémon disponibles, puedes manejarlo de alguna manera (por ejemplo, redirigir a una página de error)
        return $this->redirectToRoute('app_pokemon_index');
    }

    // Obtener un índice aleatorio para los Pokémon disponibles
    $randomIndex = array_rand($availablePokemons);

    // Obtener el Pokémon correspondiente al índice aleatorio
    $randomPokemon = $availablePokemons[$randomIndex];

        return $this->redirectToRoute("app_pokemon_show", ['id' => $randomPokemon->getId()]);
        // return $this->render('main/index.html.twig', [
        //     'controller_name' => 'MainController',
        // ]);
    }
}
