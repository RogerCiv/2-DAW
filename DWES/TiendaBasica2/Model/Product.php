<?php


class Product
{
    private $id;
    private $description;
    private $name;
    private $img;
    private $price;
    private $stock;

    public function __construct($data)
    {
        $this->id = $data["id"];
        $this->description = $data["description"];
        $this->name = $data["name"];
        $this->img = $data["img"];
        $this->price = $data["price"];
        $this->stock = $data["stock"];
    }

    public function getId(){
        return $this->id;
    }

    public function getDesc()
    {
        return $this->description;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getImg()
    {
        return $this->img;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function getStock()
    {
        return $this->stock;
    }
}
