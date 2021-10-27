let navbar = document.querySelector('.navbar');                   //busca el primer selector que tenga la clase navar

document.querySelector('#menu-btn').onclick = () =>{

  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}
let searchForm = document.querySelector('.search-form');          //busca el primer selector que tenga la clase search form

document.querySelector('#search-btn').onclick = () =>{            //elemento con id #search-btn, evento click (aparece desaparece menu y carrito)
  searchForm.classList.toggle('active');                          //se le agrega la clase active (css)
  navbar.classList.remove('active');                              // navar quita la clase active (css)
  cartItem.classList.remove('active');                            //quita la clase active al carrito cuando se vuelva a dar click
}
let cartItem = document.querySelector('.cart-items-container');   //busca el primer selector que tenga la clase cartitem

document.querySelector('#cart-btn').onclick = () =>{              //
  cartItem.classList.toggle('active');                            //
  navbar.classList.remove('active');                              //
  searchForm.classList.remove('active');                          //
}
window.onscroll = () =>{                                          // si utiliza scrol  remueva la clase active
  navbar.classList.remove('active');                              //  (navar ) a los 3 les remueva la clase
  searchForm.classList.remove('active');                          //  (buscar)
  cartItem.classList.remove('active');                            //  (cart item)
}
