<?php

namespace App\Controller;

use App\Entity\Card;
use App\Entity\Game;
use App\Form\GameType;
use App\Repository\CardRepository;
use App\Repository\GameRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/game')]
class GameController extends AbstractController
{
    #[Route('/', name: 'app_game_index', methods: ['GET'])]
    public function index(GameRepository $gameRepository): Response
    {
        return $this->render('game/index.html.twig', [
            'games' => $gameRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_game_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, CardRepository $cardRepository): Response
    {
        $game = new Game();
        //$form = $this->createForm(GameType::class, $game);
        //$form->handleRequest($request);
        $game->setGameDateTime(new \DateTime());
        $game->setPlayer1($this->getUser());

        $cards = $cardRepository->findAll();
        shuffle($cards);
        $game->addPlayer1Hand($cards[0]);
        $game->addPlayer1Hand($cards[1]);
        $game->addPlayer1Hand($cards[2]);

        $game->addCpuHand($cards[3]);
        $game->addCpuHand($cards[4]);
        $game->addCpuHand($cards[5]);
        $entityManager->persist($game);
        $entityManager->flush();
        return $this->render('game/new.html.twig', [
            'game' => $game,

        ]);

        /*
        return $this->render('game/new.html.twig', [
            'game' => $game,
            'form' => $form,
        ]);
        */
    }

    #[Route('/{id}', name: 'app_game_show', methods: ['GET'])]
    public function show(Game $game): Response
    {
        return $this->render('game/show.html.twig', [
            'game' => $game,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_game_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Game $game, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(GameType::class, $game);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_game_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('game/edit.html.twig', [
            'game' => $game,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_game_delete', methods: ['POST'])]
    public function delete(Request $request, Game $game, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $game->getId(), $request->request->get('_token'))) {
            $entityManager->remove($game);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_game_index', [], Response::HTTP_SEE_OTHER);
    }


    #[Route('/play/{gameId}/{cardId}', name: 'app_game_play', methods: ['GET'])]
    public function play(Request $request, $gameId, $cardId, EntityManagerInterface $entityManager, CardRepository $cardRepository): Response
    {
        $game = $entityManager->getRepository(Game::class)->find($gameId);
        //dd($game);
        $card = $cardRepository->find($cardId);
        // COmprobar que cardId es una de las cartas de player


        if (!$game->getPlayer1Hand()->contains($card)) {

            return $this->redirectToRoute('app_main',);
        }

        //Comprobar quien gana y actualizar el game
        $cpuHand = $game->getCpuHand()->toArray();
        shuffle($cpuHand);
        $cpuCard = $cpuHand[0];
        if ($card->getValue() > $cpuCard->getValue()) {
            $game->setWinner($this->getUser());
        }
        $entityManager->flush();
        $entityManager->persist($game);

        return $this->render('game/result.html.twig', [
            'game' => $game,

        ]);

        /*
        return $this->render('game/new.html.twig', [
            'game' => $game,
            'form' => $form,
        ]);
        */
    }
}
