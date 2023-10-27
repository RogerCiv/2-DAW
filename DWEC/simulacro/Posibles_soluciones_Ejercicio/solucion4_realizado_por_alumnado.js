// esta forma la he visto realizada por alguno de los alumnos.
// No estaría mal del todo, aunque sacamos de las clases o funciones constructoras operaciones que deberían estar dentro.

// se parte de una función constructora Cita.
function Cita(dni, datosPaciente, fecha, hora) {
  this._dni = dni;
  this._datosPaciente = datosPaciente;
  this._fecha = fecha;
  this._hora = hora;

  // añado sus métodos setter y getter
  Object.defineProperty(this, "dni", {
    get: function () {
      return this._dni;
    },

    set: function (newDni) {
      this._dni = newDni;
    },
  });

  Object.defineProperty(this, "datosPaciente", {
    get: function () {
      return this._datosPaciente;
    },

    set: function (newDatosPaciente) {
      this._datosPaciente = newDatosPaciente;
    },
  });

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
      _hora = newHora;
    },
    enumerable: true, // meto enumerable a true porque es una recomendación de MDN..(lo puedo poner también en los otros defineProperty)
  });
}

// creo una función constructora que heredará de Cita.
function CitaMedica(dni, datosPaciente, fecha, hora, especialidad) {
  Cita.call(this, dni, datosPaciente, fecha, hora);
  this._especialidad = especialidad;
  Object.defineProperty(this, "especialidad", {
    get: function () {
      return this._especialidad;
    },

    set: function (newEspecialidad) {
      this._especialidad = newEspecialidad;
    },
  });
}

// Creo un método estático para agregar citas.
CitaMedica.insertarCita = function () {
  const encontrado = this.arrayCitas.some((obj) => obj._dni === this._dni);
  if (!encontrado) {
    arr.push(obj);
    return arr;
  } else {
    console.log("Dni Repetido");
    return arr;
  }
};

// Creo un método de instancia para obtener información
CitaMedica.prototype.obtenerInformacion = function () {
  // return {
  //   dni: this._dni,
  //   datosPaciente: this._datosPaciente,
  //   fecha: this.fecha,
  //   hora: this._hora,
  //   especialidad: this._especialidad,
  // };
  // Puedo ahorra el return paso a paso y devolver this. Más corto.
  return this;
};

// creo una variable estática en la clase/Función Constructora CitaMedica para guardar todas las citas.

CitaMedica.arrayCitasMedicas = [];

// Método para agregar una nueva cita médica. Lo he hecho estático.
// Los métodos estáticos no están asociados con instancias individuales de la clase,
// sino con la clase en sí misma. Estos métodos se llaman en la propia clase y no en instancias.
CitaMedica.agregarCita = function (cita) {
  if (
    !CitaMedica.arrayCitasMedicas.some(
      (existingCita) => existingCita._dni === cita._dni
    )
  ) {
    CitaMedica.arrayCitasMedicas.push(cita);
  } else {
    console.log("Ya existe una cita médica con este DNI.");
  }
};
// aquí aplico la herencia entre las dos funciones constructoras
CitaMedica.prototype = Object.create(Cita.prototype);
CitaMedica.prototype.constructor = CitaMedica;

// creo una función fuera de las funciones para practicar que también puedo crearla fuera

function backup(key, ArraySave) {
  localStorage.setItem(key, JSON.stringify(ArraySave));
}

// ---- test---
let n1 = new CitaMedica("11", "Carlos", "22-11-23", "11:11", "Otorrino");
let n2 = new CitaMedica("22", "Miguel", "22-22-23", "22:11", "cardiologo");

// Añadimos las citas
CitaMedica.agregarCita(n1);
CitaMedica.agregarCita(n2);

// copia de seguridad de las citas.
backup("clave_del_localstorage", CitaMedica.arrayCitasMedicas);
