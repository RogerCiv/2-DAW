export class CitaMedica {
  constructor(dni, nombre, fecha, hora) {
    this._dni = dni;
    this._nombre = nombre;
    this._fecha = fecha;
    this._hora = hora;
    this._citas = [];
  }

  get getDni() {
    return this._dni;
  }
  set setDni(dni) {
    this._dni = dni;
  }
  get getNombre() {
    return this._nombre;
  }

  set setNombre(nombre) {
    this._nombre = nombre;
  }
  get getFecha() {
    return this._fecha;
  }
  set setFecha(fecha) {
    this._fecha = fecha;
  }
  get getHora() {
    return this._hora;
  }
  set setHora(hora) {
    this._hora = hora;
  }
  agregarCita(obj) {
    const encontrado = this._citas.some((el) => el.getDni === obj.getDni);
    if (!encontrado) {
      this._citas.push(obj);
      backup("Citas", this._citas);
    } else {
      console.log("Ya existe");
    }
  }
  obtenerInformacion(){
    return this._citas.map(cita => `DNI: ${cita.getDni}, Nombre: ${cita.getNombre} , Fecha: ${cita.getFecha}, Hora: ${cita.getHora}, Especialidad: ${cita._especialidad}`).join("\n");
  }
}

export function backup(nombre, arr) {
  return localStorage.setItem(nombre, JSON.stringify(arr));
}

export class CitaEspecialista extends CitaMedica {
  constructor(dni, nombre, fecha, hora, especialidad) {
    super(dni, nombre, fecha, hora);
    this._especialidad = especialidad;
  }

  obtenerInformacion() {
    return this;
  }
}
