/*====================== VARIABLES ======================*/
const inputBackbag = document.querySelector('.backbag');
const inputShoes = document.querySelector('.shoes');


document.addEventListener('DOMContentLoaded',iniciarApp())
function iniciarApp(){
    agregarItem();
    quitarItem();
    reajusteCantidadProducto();
    shippingAddress();
}
function reajusteCantidadProducto(){
    inputBackbag.addEventListener('blur',reajuste)
    inputShoes.addEventListener('blur',reajuste2)
}
function reajuste(){
    if(inputBackbag.value > 25){inputBackbag.value = 25;}
}
function reajuste2(){
    if(inputShoes.value > 25){inputShoes.value = 25;}
}
function agregarItem(){
    const btnAgregar = document.querySelector('#btn-agregar');
    const btnAgregar1 = document.querySelector('#btn-agregar2');
    btnAgregar.addEventListener('click',agregarBackbag)
    btnAgregar1.addEventListener('click',agregarShoes);
}
function agregarBackbag(){
    if(inputBackbag.value >=0 && inputBackbag.value <= 24){
        inputBackbag.value++;
    }
}
function agregarShoes(){
    if(inputShoes.value >= 0 && inputShoes.value<=24){
        inputShoes.value++;
    }
}

function quitarItem(){
    const btnQuitar = document.querySelector("#btn-quitar");
    const btnQuitar2 = document.querySelector("#btn-quitar2");
    btnQuitar.addEventListener('click', quitarBackbag);
    btnQuitar2.addEventListener('click',quitarShoes);
}
function quitarBackbag(){
    if(inputBackbag.value >= 1){inputBackbag.value --;}
    
}
function quitarShoes(){
    if(inputShoes.value >= 1){inputShoes.value--;}
}