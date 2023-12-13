<?php

namespace App\Form;

use App\Entity\Comment;
use App\Entity\Thread;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
           // ->add('createDate')
            ->add('text', null,['attr' => [
                'class' => 'form-control border border-5 border-warning',
                'placeholder' => 'Comment text'
            ],])
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
            /*
            ->add('status')
            ->add('author', EntityType::class, [
                'class' => User::class,
'choice_label' => 'id',
            ])
            ->add('thread', EntityType::class, [
                'class' => Thread::class,
'choice_label' => 'id',
            ])*/
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Comment::class,
        ]);
    }
}
