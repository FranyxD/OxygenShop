const handleClick = (event) => {
    function getCurrency() {
      fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
      .then(res => res.json())
      .then(data => {
         crearMoneda(data);
      })
   }
   getCurrency();
  
  function crearMoneda(moneda) {
    const eur = moneda.eur.eur;
    const usd = moneda.eur.usd;
    const gbp = moneda.eur.gbp;
      
    //tenemos los precios puestos de serie seleccionados en un array
    const allPriceCoin = document.querySelectorAll(".priceCoin");
      const initialValues = [2, 25, 60];
      const valorMoneda = {
        default: 1,
        eur: eur,
        usd: usd,
        gbp: gbp,
      };
      let coinSelected = event.target.value;
  
      initialValues.forEach((value, index) => {
        allPriceCoin[index].innerHTML = Math.round(value * valorMoneda[coinSelected] * 100) / 100;
      });
    }
    }



 export {handleClick};