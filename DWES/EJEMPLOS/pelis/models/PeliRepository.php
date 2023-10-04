<?php

/**
 * 
 */
class PeliRepository
{
	//metodo para sacar todas las peliculas
	public static function getMovies(){
		$db=Conectar::conexion();
		$movies= array();
		$result= $db->query("SELECT * FROM peliculas");
		while($row=$result->fetch_assoc()){
				$movies[]=new PeliModel($row);
			}
		return $movies;
	}

	public static function getMovieByTitle($t){
		$db=Conectar::conexion();
		$movies= array();
		$result= $db->query("SELECT * FROM peliculas WHERE title LIKE '%".$t."%'");
		while($row=$result->fetch_assoc()){
				$movies[]=new PeliModel($row);
			}
		return $movies;
	}
	
	public static function getMovieOrderByYear(){
		$db=Conectar::conexion();
		$movies= array();
		$result= $db->query("SELECT * FROM peliculas ORDER BY year DESC");
		while($row=$result->fetch_assoc()){
				$movies[]=new PeliModel($row);
			}
		return $movies;
	}

	
	public static function getMoviesByYear($year){
		$db=Conectar::conexion();
		$movies= array();
		$result= $db->query("SELECT * FROM peliculas WHERE year = '".$year."'");
		while($row=$result->fetch_assoc()){
				$movies[]=new PeliModel($row);
			}
		return $movies;
	}

	
	public static function getMovieById($id){
		$db=Conectar::conexion();
		$result= $db->query("SELECT * FROM peliculas WHERE id = '".$id."'");
		return new PeliModel($result->fetch_assoc());
	}
}


?>