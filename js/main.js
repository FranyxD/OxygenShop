//MODAL POPUP
const popup = document.querySelector(".popup");
const timeout = setTimeout(showPopUp, 5000);

function showPopUp() {
  if (!localStorage.getItem("popup")) {
    popup.classList.add("popup-show");
  }
}

function hidePopup() {
  popup.classList.remove("popup-show");
  localStorage.setItem("popup", true);
}
document.body.addEventListener("keypress", function (e) {
  if (e.key == "Escape") {
    localStorage.setItem("popup", true);
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
  }, 1000); //2s de lag
});

//carousel
const imgList = document.querySelectorAll(
  "#img_slider0, #img_slider1, #img_slider2"
);
const imgArr = ["#img_slider0", "#img_slider1", "#img_slider2"];
const radioArr = ["#img-radio0", "#img-radio1", "#img-radio2"];
let count = 0;
const back = document.querySelector("#back");
const forward = document.querySelector("#forward");
const radio0 = document.querySelector("#img-radio0");
const radio1 = document.querySelector("#img-radio1");
const radio2 = document.querySelector("#img-radio2");
const checkedRatios = () => {
   switch(count){
      case 0:
         radio0.checked = true;
         break;
   
      case 1:
         radio1.checked = true;
         break;
   
      case 2: 
      radio2.checked = true;
      break;
    }
}

function carouselPhotos(carousel) {
   checkedRatios();
   let goAhead = ()=> {
      if (count == imgArr.length - 1) {
         count = 0;
         for (let i = 0; i < imgArr.length; i++) {
           document.querySelector(imgArr[i]).classList.remove("active-ImageSlide");
         }
         console.log("vuelta a 0", count);
       } else {
         document.querySelector(imgArr[count]).classList.add("active-ImageSlide");
         count++;
         console.log(count);
       }
       checkedRatios();
    }
  const myInterval = setInterval(goAhead, 5000);
  const resetInterval = (myInterval)=>{
   clearInterval(myInterval);
   myInterval = setInterval(goAhead, 5000);
}
  carousel.addEventListener("click", (e) => {
    const target = e.target;
    
      //reseteamos contador

    //botones delante y atras
    switch (target) {
      case forward:
         if (count == imgArr.length - 1) {
            count = 0;
            for (let i = 0; i < imgArr.length; i++) {
              document.querySelector(imgArr[i]).classList.remove("active-ImageSlide");
            }
            console.log("vuelta a 0", count);
          } else {
            document.querySelector(imgArr[count]).classList.add("active-ImageSlide");
            count++;
            console.log(count);
          }
        break;

      case back:
        if (count == 0) {
          count = imgArr.length - 1;
          for (let i = 0; i < count; i++) {
            document
              .querySelector(imgArr[i])
              .classList.add("active-ImageSlide");
          }
          document
            .querySelector(imgArr[count])
            .classList.remove("active-ImageSlide");
          console.log(count);
        } else {
          document
            .querySelector(imgArr[count - 1])
            .classList.remove("active-ImageSlide");
          count--;
          console.log(count);
        }
        break;
    }
     //radio buttons index images
     switch (target) {
      case radio0:
        if (radio0.checked == true) {
         count = 0;
          const filtrado = radioArr.filter(element => element !== radioArr[0]);
          console.log(filtrado);
          for(let i = 0; i < filtrado.length; i++){
            document.querySelector(imgArr[i]).classList.add('active-ImageSlide');
          }
          document.querySelector(imgArr[0]).classList.remove('active-ImageSlide');
        }
        break;

      case radio1:
        if (radio1.checked == true) {
         count = 1;
          const filtrado = radioArr.filter(element => element !== radioArr[1]);
          console.log(filtrado);
          for(let i = 0; i < filtrado.length; i++){
            document.querySelector(imgArr[i]).classList.add('active-ImageSlide');
          }
          document.querySelector(imgArr[1]).classList.remove('active-ImageSlide');
        }
        break;

      case radio2:
         if (radio2.checked == true) {
            count = 2;
             const filtrado = radioArr.filter(element => element !== radioArr[2]);
             console.log(filtrado);
             for(let i = 0; i < filtrado.length; i++){
               document.querySelector(imgArr[i]).classList.add('active-ImageSlide');
             }
             document.querySelector(imgArr[2]).classList.remove('active-ImageSlide');
           }
        break;
    }
    
    
  });

   
  
   
  }

const carousel = document.querySelector(".carousel");
carouselPhotos(carousel);

