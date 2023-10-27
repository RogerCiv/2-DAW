// vamos a realizar el ejercicio, ejemplificando herencia.
// Para la herencia puedo jugar con cita y citaMedica o Persona, Paciente y Cita que sería más correcto.

/// ------ Primera forma ---
/**
 * En esta primera forma hago uso de Clases. Una clase podría ser CitaMedia y la otra podría ser CitaEspecialista.
 * Lo he planteado así, para intentar colocar todos los métodos dentro de la clase, jungando con los métodos estáticos
 * aunque la siguiente variante lo voy ha hacer con métodos fuera.
 */
class CitaMedica {
  constructor(dni, nombre, fecha, hora) {
    this.__dni = dni;
    this.__nombre = nombre;
    this.__fecha = fecha;
    this.__hora = hora;
  }

  // getter y setter para dni
  getDNI() {
    return this.__dni;
  }
  setDNI(newDNI) {
    this.__dni = newDNI;
  }
  // getter y setter para nombre
  getNombre() {
    return this.__nombre;
  }
  setDNI(newNombre) {
    this.__nombre = newNombre;
  }
  // getter y setter para fecha
  getFecha() {
    return this.__dni;
  }
  setFecha(newFecha) {
    this.__dni = newFecha;
  }
  // getter y setter para hora
  getHora() {
    return this.__hora;
  }
  setHora(newHora) {
    this.__hora = newHora;
  }
  // he creado todos los getter y setter aunque sólo utilice los del DNI.

  obtenerInformacion() {
    // return {DNI: this.__dni, Nombre: this.__nombre, Fecha: this.__fecha, Hora: this.__hora }; <-- así si no quiero devolver todo el objeto
    return this; // así si quiero devolver todo el objeto
  }

  static citasMedicas = []; // guardo en la clase las citas médicas con static. Es más productivo que sacarlo fuera en una variable global.

  static agregarCita(cita) {
    // hago que el método estático pertenecza a la clase y no a cada instancia.
    if (
      !CitaMedica.citasMedicas.some(
        (existingCita) => existingCita.getDNI() === cita.getDNI()
      )
    ) {
      CitaMedica.citasMedicas.push(cita);
    } else {
      console.log("Ya existe una cita médica con este DNI.");
    }
  }
  static backup() {
    // backup puede estar fuera o dentro. En esta variante lo hago dentro... en la otra lo hago fuera.
    localStorage.setItem(
      "citasMedicas",
      JSON.stringify(CitaMedica.citasMedicas)
    );
  }
}

class CitaEspecialista extends CitaMedica {
  constructor(dni, nombre, fecha, hora, especialidad) {
    super(dni, nombre, fecha, hora);
    this.__especialidad = especialidad;
  }
}
/// ---------- Test para validar el uso de las clases -----------

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
CitaMedica.agregarCita(nuevaCitaEspecialista);
CitaMedica.agregarCita(nuevaCitaEspecialista2);
CitaMedica.agregarCita(nuevaCitaEspecialista3);

CitaMedica.backup();
