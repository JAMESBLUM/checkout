function shippingAddress(){
    validarUsuario();
    validarAddress();
    validarCity();
    validarPostalcode();
}

function validarUsuario(){
    const name = document.querySelector("#fullName");
    name.addEventListener('blur', ()=>{
        console.log(name.textLength);
        if(name.textLength === 0){name.classList.add('errorCampo')}else{name.classList.remove('errorCampo');}
    });
}
function validarAddress(){
    const address = document.querySelector('#address');
   address.addEventListener('blur',()=>{
       if(address.textLength === 0){address.classList.add('errorCampo')}else{address.classList.remove('errorCampo');}
   });
}
function validarCity(){
    const city = document.querySelector('#city');
    console.log(city);
    city.addEventListener('blur', ()=>{
        if(city.textLength === 0){city.classList.add('errorCampo');}else{city.classList.remove('errorCampo');}
    });
}
function validarPostalcode(){
    const postalcode = document.querySelector('#postalcode');
    const postalEr = /^[0-9]+$/;
    postalcode.addEventListener('blur',()=>{
        if(postalEr.test(postalcode.value)){

        }else{postalcode.classList.add('errorCampo');}
    });
}