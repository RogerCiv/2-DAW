<?php

namespace App\Repository;

use App\Entity\Game;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Game>
 *
 * @method Game|null find($id, $lockMode = null, $lockVersion = null)
 * @method Game|null findOneBy(array $criteria, array $orderBy = null)
 * @method Game[]    findAll()
 * @method Game[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Game::class);
    }

//    /**
//     * @return Game[] Returns an array of Game objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('g.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Game
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

public function getWinsByUser($value): ?array
   {
        return $this->createQueryBuilder('g')
        ->select('count(g.id) as total')
           ->andWhere('g.player1 = :val AND g.winner = 1')
            ->setParameter('val', $value)
            ->getQuery()
           ->getOneOrNullResult();
     
        
    }

    public function getUserWhitMoreWins(): ?array
    {
        return $this->createQueryBuilder('g')
        ->select('IDENTITY(g.player1) as user_id', 'COUNT(g.id) as total_wins', 'u.username')
        ->leftJoin('g.player1', 'u')
        ->where('g.winner = 1')
        ->groupBy('g.player1')
        ->orderBy('total_wins', 'DESC')
        ->setMaxResults(1)
        ->getQuery()
        ->getOneOrNullResult();
     }


     public function getUserWithMostGames(): ?array
    {
        return $this->createQueryBuilder('g')
            ->select('IDENTITY(g.player1) as user_id', 'COUNT(g.id) as total_games', 'u.username')
            ->leftJoin('g.player1', 'u')
            ->groupBy('g.player1')
            ->orderBy('total_games', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function getUserWithMostLostGames(): ?array
    {
        return $this->createQueryBuilder('g')
            ->select('IDENTITY(g.player1) as user_id', 'COUNT(g.id) as total_lost_games', 'u.username')
            ->leftJoin('g.player1', 'u')
            ->where('g.winner = 0') // Assuming 0 indicates a lost game, adjust if needed
            ->groupBy('g.player1')
            ->orderBy('total_lost_games', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
