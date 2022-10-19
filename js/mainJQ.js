//capturarel % de scroll webpage
const popup = document.querySelector(".popup");
$(window).on("scroll", function () {
    let wintop = $(window).scrollTop(),
    docHeight = $(document).height(),
    winHeight = $(window).height();
    let scroll = (wintop / (docHeight - winHeight)) * 100;
  $(".scroll-line").css("width", scroll + "%");
  if(scroll > 25 && !localStorage.getItem('popup')){
    popup.classList.add("popup-show");
    localStorage.setItem('popup', true);
}
});

