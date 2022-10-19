/*
function validateForm(){
   let x = document.getElementById('input_email').value;
if(x.length > 20){
   document.querySelector('#errMail').innerHTML = 'Error';
}else{
   document.querySelector('#errMail').innerHTML = '';
}
}
*/
const handleClick = event =>{
    event.preventDefault()
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
 
    fetch('https://jsonplaceholder.typicode.com/posts/', {
       method: 'POST',
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
       body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(data => console.log(data))
   .then((json) => console.log(json))
   .catch(error => console.log(error));
 }

 export {handleClick};