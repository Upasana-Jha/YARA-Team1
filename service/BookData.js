var customers =[

  {id:'1', "title":"Thats not my bunny", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9780746066928_cover_image.jpg"},
  
  {id:'2', "title":"Spanish-Beginners", "author":"Taks", "publisher":"Mara House", "isbn":"73fs4222", "year":1978, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509202_cover_image.jpg"},
  
  {id:'3', "title":"Fat Cat on Mat", "author":"Mat", "publisher":"Indus House", "isbn":"746fs4222", "year":1999, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781409509233_cover_image.jpg"},
  {id:'20',"title":"First Colouring", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474985420_cover_image.jpg"},
  {id:'21',"title":"Ready for Writing", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474986694_cover_image.jpg"},
  {id:'22',"title":"corona virus", "author":"Tulsidas", "publisher":"Indus House", "isbn":"746fs4222", "year":1983, "cover":"//training.pyther.com/yara/15-day/03-BookStore/books/9781474991513_cover_image.jpg"}

  
  
  ];


export var getCustomers = ()=>{
  return customers;
}

export var addCustomer = (customer)=>{
  customer.id = Date.now()+'r';
  customers.push(customer);
}

export var deleteCustomer = (id) =>{
  customers = customers.filter((item)=>(item.id!=id));
}

export var getCustomerById = (id) =>{
  var list = customers.filter((item)=>(item.id==id));
  if(list.length > 0){
      return list[0];
  }else{
      return {}
 }
}

export var updateCustomer = (customer) =>{
  var list = customers.filter((item)=>(item.id==customer.id));
  if(list.length > 0){
       list[0].name = customer.name;
       list[0].email = customer.email;
       list[0].phone = customer.phone;
       list[0].address = customer.address;
  }
}
