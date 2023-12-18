<?php

namespace App\Form;

use App\Entity\Pokemon;
use App\Entity\Team;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TeamType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $options['user'];
        $builder
            ->add('name')
            //             ->add('trainer', EntityType::class, [
            //                 'class' => User::class,
            // 'choice_label' => 'id',
            //             ])
            ->add('pokemons', EntityType::class, [
                'class' => Pokemon::class,
                 'choice_label' => 'name',
                'choices' => $user->getPokemon(), 
                'multiple' => true,
                'attr' => [
                    'class' => 'form-control-sm text-center' , 
                    'style' => 'height: 150px',
                ],
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Team::class,
            'user' => null,
        ]);
        $resolver->setAllowedTypes('user', [User::class, 'null']);
    }
}
