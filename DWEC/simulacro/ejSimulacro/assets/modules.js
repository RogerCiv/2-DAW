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
  obtenerInformacion() {
    return this._citas
      .map(
        (cita) =>
          `DNI: ${cita.getDni}, Nombre: ${cita.getNombre} , Fecha: ${cita.getFecha}, Hora: ${cita.getHora}, Especialidad: ${cita._especialidad}`
      )
      .join("\n");
  }
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


export class Paquete{
  constructor(destino) {
      this._id = Math.floor((Math.random() * 10000) + new Date().getFullYear());
      this._destino = destino;
      
  }

  get id (){
      return this._id;
  }
  set id(nuevoID){
      this._id = nuevoID;
  }

  get destino(){
     return this._destino;
  }
  set destino(nuevoDestino){
      this._destino = nuevoDestino;
  }

  calcularTarifa(){
      const precio = 1.50 * this.peso;
      return `EL precio del paquete es de ${precio}€`;
  }

}

export class Tipo extends Paquete{
  constructor(destino,peso){
      super(destino)
      this._peso = peso
  }
  get peso(){
      return this._peso;
  }

  obtenerInformacion(){
      return `{ id: ${this.id}, destino: ${this.destino}, peso: ${this.peso} }`
  }

  setPaquetes(arr, objeto) {
    const encontrado = arr.some(el => el.id === objeto.id);
    if(!encontrado){
      arr.push(objeto);
      backup("Paquetes", arr);
    } else {
      console.log("Ya existe dicha ID");
    }
  }
}

export function backup(nombre,arr){
  return localStorage.setItem(nombre,JSON.stringify(arr))
}