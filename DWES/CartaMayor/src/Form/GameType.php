<?php

namespace App\Form;

use App\Entity\Card;
use App\Entity\Game;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GameType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            // ->add('gameDateTime')
            // ->add('winner')
            // ->add('state')
//             ->add('player1', EntityType::class, [
//                 'class' => User::class,
// 'choice_label' => 'username',
//             ])
//             ->add('player1Hand', EntityType::class, [
//                 'class' => Card::class,
// 'choice_label' => 'id',
// 'multiple' => true,
//             ])
//             ->add('cpuHand', EntityType::class, [
//                 'class' => Card::class,
// 'choice_label' => 'id',
// 'multiple' => true,
//             ])
            ->add('player2', EntityType::class, [
                'class' => User::class,
'choice_label' => 'username',
            ])
//             ->add('player1CardPicked', EntityType::class, [
//                 'class' => Card::class,
// 'choice_label' => 'id',
//             ])
//             ->add('player2CardPicked', EntityType::class, [
//                 'class' => Card::class,
// 'choice_label' => 'id',
//             ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Game::class,
        ]);
    }
}
