
export const libroLiteral = {
  _title: "",
  _author: "",
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
    this._author = newAuthor;
  },
  
  get price() {
    return this._price;
  },

  set price(newPrice) {
    if(newPrice > 0){
      this._price = newPrice;
    }else{

      this._price = false;
    }
  },


}


export function libroFuncional(title,author,price){
  this._title = title;
  this._author = author;
  this._price = price;

  Object.defineProperty(this,"title",{
    get: function(){
      return this._title;
  },
    set: function(newTitle){
      this._title = newTitle;
    }
  });

  Object.defineProperty(this,"author",{
    get: () =>{
      return this._author;
    },
    set: function(newAuthor){
      this._author = newAuthor;
    }
  })

  Object.defineProperty(this,"price",{
    get: function() {
      return this._price;
    },
    set: function(newPrice){
      if(NaN(newPrice) && newPrice > 0){
        this._price = newPrice;
      }
      //this._price = false;
    }
  })
}


export class libroClass{
  constructor(title,author, price){
    this._title = title;
    this._author = author;
    this._price = price;
  }

  get title(){
    return this._title;
  }
  set title(newTitle){
    this._title = newTitle;
  }

  get author(){
    return this._author;
  }
  set author(newAuthor){
    this._author = newAuthor;
  }

  get price(){
    return this._price;
  }

  set price(newPrice){
    if(newPrice > 0){
      this._price = newPrice;
    }else{
      this._price = false;
    }
  }
}