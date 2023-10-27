// Función constructora para CitaMedica
function CitaMedica(dni, nombre, fecha, hora) {
  this.__dni = dni;
  this.__nombre = nombre;
  this.__fecha = fecha;
  this.__hora = hora;

  // Getter y Setter para DNI
  this.getDNI = function () {
    return this.__dni;
  };
  this.setDNI = function (newDNI) {
    this.__dni = newDNI;
  };

  // Getter y Setter para nombre
  this.getNombre = function () {
    return this.__nombre;
  };
  this.setNombre = function (newNombre) {
    this.__nombre = newNombre;
  };

  // Getter y Setter para fecha
  this.getFecha = function () {
    return this.__fecha;
  };
  this.setFecha = function (newFecha) {
    this.__fecha = newFecha;
  };

  // Getter y Setter para hora
  this.getHora = function () {
    return this.__hora;
  };
  this.setHora = function (newHora) {
    this.__hora = newHora;
  };

  // Método para obtener información
  this.obtenerInformacion = function () {
    return this;
  };
}

CitaMedica.citasMedicas = [];

CitaMedica.agregarCita = function (cita) {
  if (
    !CitaMedica.citasMedicas.some(
      (existingCita) => existingCita.getDNI() === cita.getDNI()
    )
  ) {
    CitaMedica.citasMedicas.push(cita);
  } else {
    console.log("Ya existe una cita médica con este DNI.");
  }
};

CitaMedica.backup = function () {
  localStorage.setItem("citasMedicas", JSON.stringify(CitaMedica.citasMedicas));
};

// Función constructora para CitaEspecialista
function CitaEspecialista(dni, nombre, fecha, hora, especialidad) {
  CitaMedica.call(this, dni, nombre, fecha, hora);
  this.__especialidad = especialidad;
}

CitaEspecialista.prototype = Object.create(CitaMedica.prototype);
CitaEspecialista.prototype.constructor = CitaEspecialista;

// Test para validar el uso de las funciones constructoras
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
  "10-04-2024",
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

// ---- test ----

CitaMedica.agregarCita(nuevaCitaEspecialista);
CitaMedica.agregarCita(nuevaCitaEspecialista2);
CitaMedica.agregarCita(nuevaCitaEspecialista3);

CitaMedica.backup();


console.log(
)
