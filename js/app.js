// Declaración de variables
let menuVisible = false;

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