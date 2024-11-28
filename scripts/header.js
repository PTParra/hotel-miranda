const botonMenuHamburguesa = document.getElementById('menu-hamburguesa');
const listaEnlaces = document.getElementById("lista-enlaces"); 

const toggleListaEnlaces = () => {

    const imagenBoton = botonMenuHamburguesa.getElementsByTagName('img')[0];
    
    listaEnlaces.classList.toggle("show-links");

    botonMenuHamburguesa.classList.toggle('x-icon');

    imagenBoton.src = listaEnlaces.checkVisibility() ? 
    "./assets/icons/navbar/close-menu.png" : 
    "./assets/icons/navbar/open-menu.png";
}

botonMenuHamburguesa.addEventListener("click", toggleListaEnlaces)