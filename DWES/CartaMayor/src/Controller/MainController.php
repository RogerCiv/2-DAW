<?php

namespace App\Controller;

use App\Repository\GameRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_main')]
    public function index(): Response
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/stats', name: 'app_stats')]
    public function stats(UserRepository $userRepository,GameRepository $gameRepository): Response
    {
        $users=$userRepository->findAll();
        $wins=[];
        foreach ($users as $user) {
            $w= $gameRepository->getWinsByUser($user);
           $wins[$user->getId()] = $w['total'];
        }
        //usuario con más partidas

        $userWhitMoreGames = $gameRepository->getUserWithMostGames();
        //usuario con más victorias

        $userWhitMoreWins = $gameRepository->getUserWhitMoreWins();

        //usuario con mas derrottas
        $userWhitMostLosGames = $gameRepository->getUserWithMostLostGames();
    

        return $this->render('main/stats.html.twig', [
            'users' => $users,
            'wins' => $wins,
            'userWhitMoreWins' => $userWhitMoreWins,
            'userWhitMoreGames' => $userWhitMoreGames,
            'userWhitMostLostGames' => $userWhitMostLosGames,
        ]);
    }

    
}
