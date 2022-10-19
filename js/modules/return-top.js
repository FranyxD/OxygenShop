
const targetScroll = document.querySelector("#top");

const returnTop = () => {
    setTimeout(() => {
      //y el lag se lo damos a...
      targetScroll.scrollIntoView({ behavior: "smooth" });
    }, 1000); //2s de lag
  }

  export {returnTop}