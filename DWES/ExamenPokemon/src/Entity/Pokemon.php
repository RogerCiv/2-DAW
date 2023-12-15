<?php

namespace App\Entity;

use App\Repository\PokemonRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PokemonRepository::class)]
class Pokemon
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?int $number = null;

    #[ORM\ManyToMany(targetEntity: Team::class, mappedBy: 'pokemons')]
    private Collection $teams;

    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'pokemon')]
    private Collection $trainers;

    #[ORM\ManyToOne(inversedBy: 'pokemon')]
    private ?Tipo $tipo = null;

    #[ORM\Column(length: 255)]
    private ?string $img = null;

    public function __construct()
    {
        $this->teams = new ArrayCollection();
        $this->trainers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(int $number): static
    {
        $this->number = $number;

        return $this;
    }

    /**
     * @return Collection<int, Team>
     */
    public function getTeams(): Collection
    {
        return $this->teams;
    }

    public function addTeam(Team $team): static
    {
        if (!$this->teams->contains($team)) {
            $this->teams->add($team);
            $team->addPokemon($this);
        }

        return $this;
    }

    public function removeTeam(Team $team): static
    {
        if ($this->teams->removeElement($team)) {
            $team->removePokemon($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getTrainers(): Collection
    {
        return $this->trainers;
    }

    public function addTrainer(User $trainer): static
    {
        if (!$this->trainers->contains($trainer)) {
            $this->trainers->add($trainer);
            $trainer->addPokemon($this);
        }

        return $this;
    }

    public function removeTrainer(User $trainer): static
    {
        $this->trainers->removeElement($trainer);

        return $this;
    }

    public function getTipo(): ?Tipo
    {
        return $this->tipo;
    }

    public function setTipo(?Tipo $tipo): static
    {
        $this->tipo = $tipo;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): static
    {
        $this->img = $img;

        return $this;
    }
}
