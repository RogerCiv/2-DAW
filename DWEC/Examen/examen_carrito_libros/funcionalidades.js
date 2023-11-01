import { bdExamen } from "./assets/datos"

export function menorStock(){
  const librosMenosStock = new Set()

  bdExamen.libros.forEach(libro => {
    if(libro.stock < 3){
      librosMenosStock.add(libro)
    }
  })
  return librosMenosStock;
}


export function buscarLibro(cadena) {
  return bdExamen.libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(cadena.toLowerCase()) ||
      libro.editorial.toLowerCase().includes(cadena.toLowerCase())
  );
}

export function libroMasVendido() {
 
  const ventas = JSON.parse(localStorage.getItem("ventas"));

}
