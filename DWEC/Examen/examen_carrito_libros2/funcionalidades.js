import { bdExamen } from "./assets/datos";

export function buscarLibro(cadena) {
  return bdExamen.libros.filter(
    (libro) =>
      libro.titulo.toLowerCase().includes(cadena.toLowerCase()) ||
      libro.editorial.toLowerCase().includes(cadena.toLowerCase())
  );
}
