

export const libroLiteral = {
  _title: "",
  _autor: "",
  _price: 0,

  get title() {
    return this._title;
  },
  set title(newTitle) {
    this._title = newTitle;
  },

  get author(){
    return this._autor;
  },

  set author(newAuthor) {
    this._autor = newAuthor;
  },
  
  get price() {
    return this._price;
  },

  set price(newPrice) {
    if(newPrice > 0){
      this._price = newPrice;
    }
    this._price = false;
  },


}