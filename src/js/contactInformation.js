const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
document.addEventListener('DOMContentLoaded',validar());

function validar(){
    email.addEventListener("blur",validarEmail);
    phone.addEventListener("blur", validarPhone);
}
function validarEmail(){
    const emailEr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailEr.test(email.value)){
        console.log("mail correcto")
        email.classList.remove("errorCampo");
    }else{
        email.classList.add("errorCampo");
    }
}
function validarPhone(){
    const phoneEr = /^[0-9]+$/;
    if(phoneEr.test(phone.value)){
        if(phone.textLength === 10){
            console.log("nicePhone");
            phone.classList.remove("errorCampo");
        }else{phone.classList.add("errorCampo");}
    }else{
        phone.classList.add("errorCampo");
    }
}