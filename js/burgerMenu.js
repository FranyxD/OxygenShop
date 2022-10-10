
//burger menu
document.querySelector(".bars__menu").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let list_nav = document.querySelector(".lista_navegacion");
let header_box = document.querySelector(".cabecera-general");

function animateBars () {
   line1__bars.classList.toggle("activeLine1__bars-menu");
   line2__bars.classList.toggle("activeLine2__bars-menu");
   line3__bars.classList.toggle("activeLine3__bars-menu");
   list_nav.classList.toggle("activeNav");
   header_box.classList.toggle("activeCabeceraHeader");
}
