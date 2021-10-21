let searchForm = document.querySelector('.search-form');          //busca el primer selector que tenga la clase search form

document.querySelector('#search-btn').onclick = () =>{            //elemento con id #search-btn, evento click 
searchForm.classList.toggle('active');                            //se le agrega la clase active (css)
navbar.classList.remove('active');                                // navar quita la clase active (css)
cartItem.classList.remove('active');                              //quita la clase active cuando se vuelva a dar click
}
