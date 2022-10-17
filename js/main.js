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

const imgArr = ['#img_slider0', '#img_slider1', '#img_slider2'];
let count = 0;
      const back = document.querySelector("#back");
      const forward = document.querySelector("#forward");

function carouselPhotos(carousel) {
  setInterval(function () {
   if(count == imgArr.length - 1){
      count = 0;
      for(let i = 0; i < imgArr.length; i++){
         document.querySelector(imgArr[i]).classList.remove("active-ImageSlide");
      }
      console.log('vuelta a 0',count)
      
   }else {
      document.querySelector(imgArr[count]).classList.add("active-ImageSlide");
      count++;
      console.log(count)
   }
  }, 5000);
  carousel.addEventListener("click", (e) => {
    const target = e.target;
    
    if (target == forward) {
      if(count == imgArr.length - 1){
         count = 0;
         for(let i = 0; i < imgArr.length; i++){
            document.querySelector(imgArr[i]).classList.remove("active-ImageSlide");
         }
         console.log('vuelta a 0',count)
         
      }else {
         document.querySelector(imgArr[count]).classList.add("active-ImageSlide");
         count++;
         console.log(count)
      }
    } else if (target == back) {
      if(count == 0){
         count = imgArr.length - 1;
         for(let i = 0; i < count; i++){
            document.querySelector(imgArr[i]).classList.add("active-ImageSlide");
         }
         document.querySelector(imgArr[count]).classList.remove("active-ImageSlide");
         console.log(count)
      }else{
         document.querySelector(imgArr[count - 1]).classList.remove("active-ImageSlide");
         count--;
         console.log(count);
      }
      
    }
    
  });
}
const carousel = document.querySelector(".carousel");
carouselPhotos(carousel);


//validate form
