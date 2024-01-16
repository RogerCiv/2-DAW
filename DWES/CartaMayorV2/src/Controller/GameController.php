<?php

namespace App\Controller;

use App\Entity\Game;
use App\Entity\Card;
use App\Form\GameType;
use App\Repository\GameRepository;
use App\Repository\CardRepository;
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
        $form = $this->createForm(GameType::class, $game);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $game->setGameDateTime(new \DateTime());
            $game->setPlayer1($this->getUser());
            $game->setState(0);
            
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

            return $this->render('main/game.html.twig', [
                'game' => $game,
            ]);
            }

        return $this->render('game/new.html.twig', [
            'game' => $game,
            'form' => $form,
        ]);
    }

    
    #[Route('/accept/{game}', name: 'app_game_accept', methods: ['GET', 'POST'])]
    public function accept(Game $game , EntityManagerInterface $entityManager, CardRepository $cardRepository): Response
    {
        $game->setState(1);
        $entityManager->flush();

        return $this->render('main/game.html.twig', [
            'game' => $game,
        ]);
    }

    
    #[Route('/pick/{game}/{card}', name: 'app_game_pick', methods: ['GET'])]
    public function pick(Game $game, Card $card, EntityManagerInterface $entityManager): Response
    {
        if($game->getPlayer1() == $this->getUser()){
            if(!$game->getPlayer1Hand()->contains($card)){
                return $this->redirectToRoute("app_main");
            }

            $game->setPlayer1CardPicked($card);

            if($game->getPlayer2CardPicked()){

                $game->setState(2);
            }

        }
        
        else if($game->getPlayer2() == $this->getUser()){
            if(!$game->getCpuHand()->contains($card)){
                return $this->redirectToRoute("app_main");
            }
            
            $game->setPlayer2CardPicked($card);

            if($game->getPlayer1CardPicked()){

            $game->setState(2);
            }
        }


        if($game->getState() == 2){
            
            if($game->getPlayer1CardPicked()->getValue() > $game->getPlayer2CardPicked()->getValue()){
                $game->setWinner($game->getPlayer1());
            }
            else $game->setWinner($game->getPlayer2());
        

            $entityManager->flush();

            return $this->render('main/result.html.twig', [
                'game' => $game,
            ]);
        }
        
        $entityManager->flush();
        
        return $this->render('main/game.html.twig', [
            'game' => $game,
        ]);
    }
    
    #[Route('/newAlone', name: 'app_game_new_alone', methods: ['GET', 'POST'])]
    public function newAlone(Request $request, EntityManagerInterface $entityManager, CardRepository $cardRepository): Response
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
    }

    
    #[Route('/play/{game}/{card}', name: 'app_game_play', methods: ['GET'])]
    public function play( Game $game, Card $card, EntityManagerInterface $entityManager, GameRepository $gameRepository): Response
    {
        // $game=$entityManager->getRepository(Game::class)->find($gameId);
        // $card=$entityManager->getRepository(Card::class)->find($cardId);

       //comprobar que cardId es una de las cartas de player
        if(!$game->getPlayer1Hand()->contains($card)){
            return $this->redirectToRoute("app_main");
        }
       //comprobar quien gana y actualizar el game
        $cpuHand = $game->getCpuHand()->toArray();
        shuffle($cpuHand);

        if($card->getValue() > $cpuHand[0]->getValue()){
            $game->setWinner(1);
        }
        else {
            $game->setWinner(0);

        }

        
        $entityManager->persist($game);
        $entityManager->flush();

        
        return $this->render('game/result.html.twig', [
            'game' => $game,
        ]);
        
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
        if ($this->isCsrfTokenValid('delete'.$game->getId(), $request->request->get('_token'))) {
            $entityManager->remove($game);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_game_index', [], Response::HTTP_SEE_OTHER);
    }
}
