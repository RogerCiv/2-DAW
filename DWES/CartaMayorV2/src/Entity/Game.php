<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GameRepository::class)]
class Game
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $gameDateTime = null;

    #[ORM\ManyToOne(inversedBy: 'games')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $player1 = null;

    #[ORM\ManyToOne(inversedBy: 'wins')]
    private ?User $winner = null;

    #[ORM\ManyToMany(targetEntity: Card::class)]
    private Collection $player1Hand;

    #[ORM\ManyToMany(targetEntity: Card::class, mappedBy: 'gamed')]
    private Collection $cpuHand;

    #[ORM\ManyToOne(inversedBy: 'gamesInvited')]
    private ?User $player2 = null;

    #[ORM\Column(type: Types::SMALLINT)]
    private ?int $state = null;

    #[ORM\ManyToOne]
    private ?Card $player1CardPicked = null;

    #[ORM\ManyToOne]
    private ?Card $player2CardPicked = null;

    public function __construct()
    {
        $this->player1Hand = new ArrayCollection();
        $this->cpuHand = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGameDateTime(): ?\DateTimeInterface
    {
        return $this->gameDateTime;
    }

    public function setGameDateTime(\DateTimeInterface $gameDateTime): static
    {
        $this->gameDateTime = $gameDateTime;

        return $this;
    }

    public function getPlayer1(): ?User
    {
        return $this->player1;
    }

    public function setPlayer1(?User $player1): static
    {
        $this->player1 = $player1;

        return $this;
    }

    public function getWinner(): ?User
    {
        return $this->winner;
    }

    public function setWinner(?User $winner): static
    {
        $this->winner = $winner;

        return $this;
    }

    /**
     * @return Collection<int, Card>
     */
    public function getPlayer1Hand(): Collection
    {
        return $this->player1Hand;
    }

    public function addPlayer1Hand(Card $player1Hand): static
    {
        if (!$this->player1Hand->contains($player1Hand)) {
            $this->player1Hand->add($player1Hand);
        }

        return $this;
    }

    public function removePlayer1Hand(Card $player1Hand): static
    {
        $this->player1Hand->removeElement($player1Hand);

        return $this;
    }

    /**
     * @return Collection<int, Card>
     */
    public function getCpuHand(): Collection
    {
        return $this->cpuHand;
    }

    public function addCpuHand(Card $cpuHand): static
    {
        if (!$this->cpuHand->contains($cpuHand)) {
            $this->cpuHand->add($cpuHand);
            $cpuHand->addGamed($this);
        }

        return $this;
    }

    public function removeCpuHand(Card $cpuHand): static
    {
        if ($this->cpuHand->removeElement($cpuHand)) {
            $cpuHand->removeGamed($this);
        }

        return $this;
    }

    public function getPlayer2(): ?User
    {
        return $this->player2;
    }

    public function setPlayer2(?User $player2): static
    {
        $this->player2 = $player2;

        return $this;
    }

    public function getState(): ?int
    {
        return $this->state;
    }

    public function setState(int $state): static
    {
        $this->state = $state;

        return $this;
    }

    public function getPlayer1CardPicked(): ?Card
    {
        return $this->player1CardPicked;
    }

    public function setPlayer1CardPicked(?Card $player1CardPicked): static
    {
        $this->player1CardPicked = $player1CardPicked;

        return $this;
    }

    public function getPlayer2CardPicked(): ?Card
    {
        return $this->player2CardPicked;
    }

    public function setPlayer2CardPicked(?Card $player2CardPicked): static
    {
        $this->player2CardPicked = $player2CardPicked;

        return $this;
    }
}
