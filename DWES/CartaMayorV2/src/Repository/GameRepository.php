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


   public function getWinsByUser($value): ?int
   {
       $array= $this->createQueryBuilder('g')
           ->select('count(g.id) as total')
           ->andWhere('g.player1 = :val AND g.winner = 1')
           ->setParameter('val', $value)
           ->getQuery()
           ->getOneOrNullResult()
       ;
       return $array['total'];
   }

   public function getTopGamer(): ?int
   {
       $array= $this->createQueryBuilder('g')
           ->select('count(g.player1) as total')
        //    ->andWhere('g.player1 = :val AND g.winner = 1')
        //    ->setParameter('val', $value)
           ->getQuery()
          // ->getMaxResults()
           ->getOneOrNullResult()
       ;

       return $array['total'];
   }

   public function findGames($user, $st): array
   {
       return $this->createQueryBuilder('g')
           ->andWhere('(g.player1 = :val OR g.player2 = :val) AND g.state = :val2')
           ->setParameter('val', $user)
           ->setParameter('val2', $st)
           ->orderBy('g.id', 'ASC')
           ->getQuery()
           ->getResult()
       ;
   }
   
   public function findInvitationsGames($value): array
   {
       return $this->createQueryBuilder('g')
           ->andWhere('g.player2 = :val AND g.state = 0')
           ->setParameter('val', $value)
           ->orderBy('g.id', 'ASC')
           ->getQuery()
           ->getResult()
       ;
   }


}
