export function Usuario(id, nombre, apellido, email) {
  this._id = id;
  this._nombre = nombre;
  this._apellido = apellido;
  this._email = email;

  this.getId = function () {
    return this._id;
  };
  this.getNombre = function () {
    return this._nombre;
  };

  this.getApellido = function () {
    return this._apellido;
  };
  this.getEmail = function () {
    return this._email;
  };

  this.getComments = function (arr) {
    const result = [];

    arr.map(el => {
      if(el.getId === this.getId){
        result.push(el.comment)
      }
    })
    return result 
  };
  
}
