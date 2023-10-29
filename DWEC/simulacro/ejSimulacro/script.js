import { CitaEspecialista, CitaMedica } from "./assets/modules";

const nuevaCitaEspecialista = new CitaEspecialista(
  "987654321A",
  "Alberto",
  "11-11-2023",
  "11:40",
  "Endocrinología"
);
const nuevaCitaEspecialista2 = new CitaEspecialista(
  "987654321A",
  "Sara",
  "10-04_2024",
  "10:00",
  "Otorrino"
);
const nuevaCitaEspecialista3 = new CitaEspecialista(
  "12345678Z",
  "Manolo",
  "25-10-2023",
  "10:00",
  "Cardiología"
);
const nuevaCitaEspecialista4 = new CitaEspecialista(
  "12345678L",
  "Paquito",
  "25-10-2023",
  "10:10",
  "Cardiología"
);

const citaMedica = new CitaMedica();
citaMedica.agregarCita(nuevaCitaEspecialista);
citaMedica.agregarCita(nuevaCitaEspecialista2);
citaMedica.agregarCita(nuevaCitaEspecialista3);
citaMedica.agregarCita(nuevaCitaEspecialista4);

//console.log(nuevaCitaEspecialista);
//console.log(nuevaCitaEspecialista.obtenerInformacion());
console.log(citaMedica.obtenerInformacion());
