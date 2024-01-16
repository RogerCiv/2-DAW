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
    public function index(GameRepository $gameRepository): Response
    {
        //$invitations = $gameRepository->findInvitationsGames($this->getUser());
        
        $invitations = $gameRepository->findGames($this->getUser(),0);
        $games = $gameRepository->findGames($this->getUser(),1);

        return $this->render('main/index.html.twig', [
            'invitations' => $invitations,
            'games' => $games
        ]);
    }
    
    #[Route('/stats', name: 'app_stats')]
    public function stats(UserRepository $userRepository, GameRepository $gameRepository): Response
    {
        $users=$userRepository->findAll();
        $wins=[];
        foreach ($users as $user){
            $wins[$user->getId()]=$gameRepository->getWinsByUser($user);
        }
        
        $gameRepository->getTopGamer();

        return $this->render('main/stats.html.twig', [
            'users' => $users,
            'wins' => $wins,
        ]);
    }
}
