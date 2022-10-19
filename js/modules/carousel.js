
  const imgArr = ["#img_slider0", "#img_slider1", "#img_slider2"];
  const radioArr = ["#img-radio0", "#img-radio1", "#img-radio2"];
  let count = 0;
  const back = document.querySelector("#back");
  const forward = document.querySelector("#forward");
  const radio0 = document.querySelector("#img-radio0");
  const radio1 = document.querySelector("#img-radio1");
  const radio2 = document.querySelector("#img-radio2");
  
  const goAhead = ()=> {
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
  let myInterval = setInterval(goAhead, 5000);

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
  
  const resetInterval = () =>{
    clearInterval(myInterval);
    myInterval = setInterval(goAhead, 5000);
   }

  function carouselPhotos(carousel) {
    resetInterval();
    checkedRatios();
    
    
   carousel.addEventListener("click", (e) => {
     const target = e.target;
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
           checkedRatios();
           resetInterval();
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
         checkedRatios();
        resetInterval();
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
  
export {checkedRatios, carouselPhotos, resetInterval, myInterval, goAhead};