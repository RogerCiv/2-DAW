<?php

namespace App\Entity;

use App\Repository\CardRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CardRepository::class)]
class Card
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $value = null;

    #[ORM\Column(length: 7)]
    private ?string $suit = null;

    #[ORM\Column(length: 255)]
    private ?string $label = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $img = null;

    #[ORM\ManyToMany(targetEntity: Game::class, inversedBy: 'cpuHand')]
    private Collection $gamed;

    public function __construct()
    {
        $this->gamed = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?int
    {
        return $this->value;
    }

    public function setValue(int $value): static
    {
        $this->value = $value;

        return $this;
    }

    public function getSuit(): ?string
    {
        return $this->suit;
    }

    public function setSuit(string $suit): static
    {
        $this->suit = $suit;

        return $this;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(?string $img): static
    {
        $this->img = $img;

        return $this;
    }

    /**
     * @return Collection<int, Game>
     */
    public function getGamed(): Collection
    {
        return $this->gamed;
    }

    public function addGamed(Game $gamed): static
    {
        if (!$this->gamed->contains($gamed)) {
            $this->gamed->add($gamed);
        }

        return $this;
    }

    public function removeGamed(Game $gamed): static
    {
        $this->gamed->removeElement($gamed);

        return $this;
    }
}
