
const numero = document.getElementById("numdiv");


numero.addEventListener("dblclick", multiplicar, false);
numero.addEventListener("mouseover", cambiar, false);
numero.addEventListener("mouseout", volver, false);

function multiplicar(){

   var num= parseInt(numero.textContent);
    numero.innerText=  num*3;
}

function cambiar(){
    numero.style.background= "pink";
}

function volver(){
    numero.style.background= "white";
}