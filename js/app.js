// Declaración de variables
let menuVisible = false;
let carritoVisible = false;

// Mostrando panel del carrito de compra
function mostrarCarrito() {
  if (carritoVisible) {
    document.getElementById("carrito-ocultar").classList = "";
    carritoVisible = false;
  }
  else {
    document.getElementById("carrito-ocultar").classList = "ocultar-carrito";
    carritoVisible = true;
  }
}


// Mostrar u ocultar el menú
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  }
  else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

// Hacer selección del menú
function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}