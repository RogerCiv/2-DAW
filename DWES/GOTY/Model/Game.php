<?php

class Game
{
    private $id;
    private $nombre;
    private $img;
    private $id_categoria;
    private $votes;

    public function __construct($datos)
    {
        $this->id = $datos["id"];
        $this->nombre = $datos["nombre"];
        $this->img = $datos["img"];
        $this->id_categoria = $datos["id_categoria"];
        $this->votes = $datos["votes"];
    }

    public function getId()
    {
        return $this->id;
    }
    public function getNombre()
    {
        return $this->nombre;
    }
    public function getImg()
    {
        return $this->img;
    }
    public function getIdCategoria()
    {
        return $this->id_categoria;
    }
    public function getVotes()
    {
        return $this->votes;
    }
    public function getCategoria()
    {

        return CategoriaRepository::getCategoriaById($this->id_categoria);
    }
}
