// Función constructora para CitaMedica
function CitaMedica(dni, nombre, fecha, hora) {
  // Propiedades privadas
  this._dni = dni;
  this._nombre = nombre;
  this._fecha = fecha;
  this._hora = hora;

  // Define un getter y setter para DNI con defineProperty
  Object.defineProperty(this, "dni", {
    get: function () {
      return this._dni;
    },
    set: function (newDNI) {
      this._dni = newDNI;
    },
  });

  // Define un getter y setter para nombre
  Object.defineProperty(this, "nombre", {
    get: function () {
      return this._nombre;
    },
    set: function (newNombre) {
      this._nombre = newNombre;
    },
  });

  // Define un getter y setter para fecha
  Object.defineProperty(this, "fecha", {
    get: function () {
      return this._fecha;
    },
    set: function (newFecha) {
      this._fecha = newFecha;
    },
  });

  // Define un getter y setter para hora
  Object.defineProperty(this, "hora", {
    get: function () {
      return this._hora;
    },
    set: function (newHora) {
      this._hora = newHora;
    },
    enumerable: true, // meto enumerable a true porque es una recomendación de MDN..
    // No lo he puesto en los anteriores para detectar inconsistencias
    //(lo puedo poner también en los otros defineProperty)
  });
}

// Método para obtener información
CitaMedica.prototype.obtenerInformacion = function () {
  return this;
};
/**
 * Recuerdo que la palabra clave prototype se usa en JavaScript para agregar propiedades y métodos a las funciones constructoras y,
 * por lo tanto, a las instancias de objetos creadas a partir de esas funciones constructoras.
 */

// Array para almacenar todas las citas médicas
CitaMedica.citasMedicas = [];

// Método para agregar una nueva cita médica. Lo he hecho estático.
// Los métodos estáticos no están asociados con instancias individuales de la clase,
// sino con la clase en sí misma. Estos métodos se llaman en la propia clase y no en instancias.
CitaMedica.agregarCita = function (cita) {
  if (
    !CitaMedica.citasMedicas.some(
      (existingCita) => existingCita._dni === cita._dni
    )
  ) {
    CitaMedica.citasMedicas.push(cita);
  } else {
    console.log("Ya existe una cita médica con este DNI.");
  }
};

// Función Estática para realizar el respaldo de citas médicas en el LocalStorage
// La podía haber sacado fuera pasándole una key="citaMedica" y el array.
// Lo pongo aquí para no crear un fichero modules con dicha función.
CitaMedica.backup = function () {
  localStorage.setItem("citasMedicas", JSON.stringify(CitaMedica.citasMedicas));
};

// Función constructora para CitaEspecialista
function CitaEspecialista(dni, nombre, fecha, hora, especialidad) {
  CitaMedica.call(this, dni, nombre, fecha, hora);
  this._especialidad = especialidad;
}

// Herencia
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

CitaMedica.agregarCita(nuevaCitaEspecialista);
CitaMedica.agregarCita(nuevaCitaEspecialista2);
CitaMedica.agregarCita(nuevaCitaEspecialista3);

CitaMedica.backup();
