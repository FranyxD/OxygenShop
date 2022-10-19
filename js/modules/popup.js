const popup = document.querySelector(".popup");

function showPopUp() {
    if (!localStorage.getItem("popup")) {
      popup.classList.add("popup-show");
    }
  }
  
  function hidePopup() {
    popup.classList.remove("popup-show");
    localStorage.setItem("popup", true);
  }
  
  function handleClick (e) {
    if (e.key == "Escape") {
      localStorage.setItem("popup", true);
      popup.classList.remove("popup-show");
    }
  }

  export {showPopUp, hidePopup, handleClick};