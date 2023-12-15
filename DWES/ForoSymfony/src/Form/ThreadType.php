<?php

namespace App\Form;

use App\Entity\Forum;
use App\Entity\Thread;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use App\Form\StringType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ThreadType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('text',TextType::classay('mapped' => false)), arr
            /*
            ->add('createDate')
            ->add('status')
            ->add('author', EntityType::class, [
                'class' => User::class,
'choice_label' => 'id',
            ])
            ->add('forum', EntityType::class, [
                'class' => Forum::class,
'choice_label' => 'id',
            ])*/
        ;

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Thread::class,
        ]);
    }
}
