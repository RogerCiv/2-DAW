<?php

/**
 * 
 */
class PeliModel 
{
	private $id;
	private $title;
	private $year;
	private $image;
	private $likes;
	
	function __construct($datos)
	{
		$this->id=$datos['id'];
		$this->title=$datos['title'];
		$this->year=$datos['year'];
		$this->image=$datos['poster'];
		$this->likes =$datos['likes'];
		# code...
	}

	public function getId(){
		return $this->id;
	}
	public function getTitle(){
		return $this->title;
	}
	public function getYear(){
		return $this->year;
	}
	public function getImage(){
		return $this->image;
	}
	public function getLikes(){
		return $this->likes;
	}
	public function addLike($k){
		$db=Conectar::conexion();
		$result= $db->query("UPDATE peliculas SET likes = likes + ".$k." 
		WHERE id=".$this->id);
		$db->close;
	}
}

?>