//MODAL POPUP
const popup = document.querySelector(".popup");
const timeout = setTimeout(showPopUp, 5000);

function showPopUp() {
      if(!localStorage.getItem('popup')){
         popup.classList.add("popup-show");
      }
   
    
}

function hidePopup() {
  popup.classList.remove("popup-show");
  localStorage.setItem('popup', true);
}
document.body.addEventListener('keypress', function(e) {
   if (e.key == "Escape") {
      localStorage.setItem('popup', true);
      popup.classList.remove("popup-show");
   }
 });


//burger menu
document.querySelector(".bars__menu").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
let line2__bars = document.querySelector(".line2__bars-menu");
let line3__bars = document.querySelector(".line3__bars-menu");
let list_nav = document.querySelector(".lista_navegacion");
let header_box = document.querySelector(".cabecera-general");

function animateBars() {
   line1__bars.classList.toggle("activeLine1__bars-menu");
   line2__bars.classList.toggle("activeLine2__bars-menu");
   line3__bars.classList.toggle("activeLine3__bars-menu");
   list_nav.classList.toggle("activeNav");
   header_box.classList.toggle("activeCabeceraHeader");
}

//returnTop
const returnTopButton = document.querySelector("#returnTop");
const targetScroll = document.querySelector("#top");

//registramos el click
returnTopButton.addEventListener("click", () => {
   setTimeout(() => {
      //y el lag se lo damos a...
     targetScroll.scrollIntoView({ behavior: "smooth" });
   },1000);   //2s de lag   
 });

//carousel
const images = [
   "../img/wall-light.jpg",
   "../img/fall-leaf.jpg",
   "../img/building-view.jpg",
];
let count = 0;
      const back = document.querySelector("#back");
      const forward = document.querySelector("#forward");
      const img = document.querySelector("#img_slider");

function carouselPhotos(carousel) {
   setInterval(function() {
      if (count < images.length - 1) {
         //si contador es menor que 0, queremos ir hacia delante
         //vamos una posicion por delante de la actual
         img.src = images[count + 1];
         //para infinito, le asignamos al count la nueva posicion
         count++;
      } else {
         //si el contado es menor que 0, saltamos a la posicion 0
         img.src = images[0];
         //asignamos al posicion actual a count
         count = 0;
      }
   }, 5000);
   carousel.addEventListener("click", (e) => {
      const target = e.target;
      if (target == back) {
         
         if (count > 0) {
            //si count es mayor que 0, debemos ir hacia atras
            img.src = images[count - 1];
            //para que sea infinito le restamos a count, sera su nueva posicion
            count--;
         } else {
            //si fuese menor que 0, la posicion sera el
            //largo de la imagen - 1 que seria la ultima posicion
            img.src = images[images.length - 1];
            //al contador le asignamos la posicion, para el infinito
            count = images.length - 1;
         }
      } else if (target == forward) {
         if (count < images.length - 1) {
            //si contador es menor que 0, queremos ir hacia delante
            //vamos una posicion por delante de la actual
            img.src = images[count + 1];
            //para infinito, le asignamos al count la nueva posicion
            count++;
         } else {
            //si el contado es menor que 0, saltamos a la posicion 0
            img.src = images[0];
            //asignamos al posicion actual a count
            count = 0;
         }
      }
      
   });
}

const carousel = document.querySelector(".carousel");
carouselPhotos(carousel);
