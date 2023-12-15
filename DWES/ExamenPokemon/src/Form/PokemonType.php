<?php

namespace App\Form;

use App\Entity\Pokemon;
use App\Entity\Team;
use App\Entity\Tipo;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class PokemonType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name')
            ->add('number')
//             ->add('teams', EntityType::class, [
//                 'class' => Team::class,
// 'choice_label' => 'id',
// 'multiple' => true,
//             ])
//             ->add('trainers', EntityType::class, [
//                 'class' => User::class,
// 'choice_label' => 'id',
// 'multiple' => true,
//             ])
            ->add('tipo', EntityType::class, [
                'class' => Tipo::class,
'choice_label' => 'name',
            ])
            ->add('img', FileType::class, [
                'label' => 'Imagen (IMG file)',

                // unmapped means that this field is not associated to any entity property
                'mapped' => false,

                // make it optional so you don't have to re-upload the PDF file
                // every time you edit the Product details
                'required' => false,

                // unmapped fields can't define their validation using attributes
                // in the associated entity, so you can use the PHP constraint classes
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/webp',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid IMG',
                    ])
                ],
                'attr' => [
                    'class' => 'form-control bg-primary',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Pokemon::class,
        ]);
    }
}
