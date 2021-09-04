var books =[
  {id:'6',"title":"Billy Mini Monsters", "author":"Zanna Davidson", "publisher":"Indus House", "isbn":"746fs4222", "year":2020, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474978439_cover_image.jpg"},
  {id:'10', "title":"Looking After Our Planet", "author":"Zanna Davidson", "publisher":"Indus House", "isbn":"746fs4222", "year":2020, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474968942_cover_image.jpg"},
  {id:'7', "title":"Infinity Files", "author":"S.M. Wilson", "publisher":"Indus House", "isbn":"746fs4222", "year":1999, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474972208_cover_image.jpg"},
  {id:'1', "title":"That's not my bunny", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":2011, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9780746066928_cover_image.jpg"},
  {id:'2', "title":"Spanish for Beginners", "author":"Taksborn Harrison", "publisher":"Mara House", "isbn":"73fs4222", "year":2011, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509202_cover_image.jpg"},
  {id:'3', "title":"Fat Cat on Mat", "author":"Stephen Carrwright", "publisher":"Indus House", "isbn":"746fs4222", "year":1988, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509233_cover_image.jpg"},
  {id:'20',"title":"First Colouring", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":2012, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474985420_cover_image.jpg"},
  {id:'21',"title":"Ready for Writing", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":2000, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474986694_cover_image.jpg"},
  {id:'22',"title":"corona virus", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474991513_cover_image.jpg"},
  {id:'8', "title":"The Unhurry Book", "author":"Frega Harrison", "publisher":"Indus House", "isbn":"746fs4222", "year":1999, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474970495_cover_image.jpg"},
  {id:'9', "title":"The Sleeping Prince", "author":"Anity Prentice", "publisher":"Indus House", "isbn":"746fs4222", "year":2010, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474969802_cover_image.jpg"},
  {id:'11', "title":"The Shark Caller", "author":"Zillah Bethell", "publisher":"Indus House", "isbn":"746fs4222", "year":2019, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474966849_cover_image.jpg"},
];



export var getBooks = ()=>{
  return books;
}

export var getBooksById = (id) =>{
  var list = customers.filter((item)=>(item.id==id));
  if(list.length > 0){
      return list[0];
  }else{
      return {}
 }
}

export var addBookToCart = (customer) =>{
  var list = customers.filter((item)=>(item.id==customer.id));
  if(list.length > 0){
       list[0].name = customer.name;
       list[0].email = customer.email;
       list[0].phone = customer.phone;
       list[0].address = customer.address;
  }
}
