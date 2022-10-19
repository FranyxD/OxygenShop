//IMPORTS
import { showPopUp, hidePopup, handleClick as targetPopup } from "./modules/popup.js";
import * as carousel from "./modules/carousel.js";
import { animateBars } from "./modules/burger-menu.js";
import { returnTop } from "./modules/return-top.js";
import { handleClick as targetForm} from "./modules/send-form.js";
import { handleClick as targetCurrency } from "./modules/exchange-currency.js";

//MODAL POPUP
const closePopup = document.querySelector('.popup__container__close');
const outPopup = document.querySelector('.popup__blocker');
setTimeout(showPopUp, 5000);
closePopup.addEventListener('click', hidePopup);
outPopup.addEventListener('click', hidePopup);
document.body.addEventListener("keypress", targetPopup);

//burger menu
document.querySelector(".bars__menu").addEventListener("click", animateBars);

//returnTop
const returnTopButton = document.querySelector("#returnTop");
returnTopButton.addEventListener("click",returnTop );

//carousel
const carouselElement = document.querySelector(".carousel");
carousel.carouselPhotos(carouselElement);

//validate form
const form = document.getElementById('form');
form.addEventListener('submit', targetForm);

//cambio de moneda
const selectCoin = document.getElementById("coin");
selectCoin.addEventListener("change", targetCurrency);
