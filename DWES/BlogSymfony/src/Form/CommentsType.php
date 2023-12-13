<?php

namespace App\Form;

use App\Entity\Comments;
use App\Entity\Publication;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CommentsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('comment')
          //  ->add('comment_date')
  /*          ->add('id_user', EntityType::class, [
                'class' => User::class,
'choice_label' => 'id',
            ])
            ->add('id_pub', EntityType::class, [
                'class' => Publication::class,
'choice_label' => 'id',
            ])*/
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Comments::class,
        ]);
    }
}
