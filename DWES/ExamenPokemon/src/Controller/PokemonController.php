<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Pokemon;

use App\Form\PokemonType;
use App\Repository\PokemonRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/pokemon')]
class PokemonController extends AbstractController
{
    #[Route('/', name: 'app_pokemon_index', methods: ['GET'])]
    public function index(PokemonRepository $pokemonRepository): Response
    {
        return $this->render('pokemon/index.html.twig', [
            'pokemon' => $pokemonRepository->findAll(),
        ]);
    }
    #[IsGranted("ROLE_ADMIN")]
    #[Route('/new', name: 'app_pokemon_new', methods: ['GET', 'POST'])]
    public function new(SluggerInterface $slugger, Request $request, EntityManagerInterface $entityManager): Response
    {
        $pokemon = new Pokemon();
        $form = $this->createForm(PokemonType::class, $pokemon);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $imgFile = $form->get('img')->getData();
            if ($imgFile) {
                $originalFilename = pathinfo($imgFile->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $imgFile->guessExtension();

                try {
                    $imgFile->move(
                        $this->getParameter('img_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }
                $pokemon->setImg($newFilename);
            }
            $entityManager->persist($pokemon);
            $entityManager->flush();

            return $this->redirectToRoute('app_pokemon_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('pokemon/new.html.twig', [
            'pokemon' => $pokemon,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_pokemon_show', methods: ['GET'])]
    public function show(Pokemon $pokemon): Response
    {
        return $this->render('pokemon/show.html.twig', [
            'pokemon' => $pokemon,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_pokemon_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Pokemon $pokemon, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PokemonType::class, $pokemon);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_pokemon_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('pokemon/edit.html.twig', [
            'pokemon' => $pokemon,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_pokemon_delete', methods: ['POST'])]
    public function delete(Request $request, Pokemon $pokemon, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $pokemon->getId(), $request->request->get('_token'))) {
            $entityManager->remove($pokemon);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_pokemon_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/add/{id}', name: 'app_pokemon_add')]
    public function add(Pokemon $pokemon, EntityManagerInterface $entityManager): RedirectResponse
    {
        // Obtener el usuario actual
        $user = $this->getUser();

        // Verificar si un usuario está autenticado
        if ($user instanceof UserInterface && $pokemon instanceof Pokemon) {
            // Asociar el Pokémon con el usuario
            $user->addPokemon($pokemon);

            // Guardar cambios en la base de datos
            $entityManager->flush();
        }

        // Redirigir a la página de índice de Pokémon
        return $this->redirectToRoute('app_pokemon_index');
    }


    // ...

    #[Route("/add-to-user/{pokemonId}", name: "app_pokemon_add_to_user")]
    public function addToUser(User $user, Pokemon $pokemon, EntityManagerInterface $entityManager): Response
    {
        // Asegúrate de que el usuario esté autenticado
        if ($this->getUser()) {
            // Agrega el Pokémon al usuario autenticado

            $pokemon->addTrainer($user);


            // Guarda los cambios en la base de datos (si es necesario)
            // $entityManager->persist($user);
            // $entityManager->persist($pokemon);
            $entityManager->flush();
            // Verifica si el Pokémon se ha añadido correctamente
            if ($pokemon->getTrainers()->contains($user)) {
                $this->addFlash('success', 'Pokémon añadido correctamente.');
            } else {
                $this->addFlash('error', 'Hubo un problema al añadir el Pokémon.');
            }

            // Redirige a donde desees después de agregar el Pokémon
            return $this->redirectToRoute('app_pokemon_index');
        }

        // Maneja la lógica si el usuario no está autenticado

        // ...

        return $this->render('pokemon/index.html.twig', [
            'pokemon' => $pokemon,
        ]);
    }
}
