
const numero = document.getElementById("numdiv");
const n = document.getElementById("number")
const butRadio = document.getElementById("boton")
const p = document.getElementById("p")


numero.addEventListener("dblclick", multiplicar, false);
numero.addEventListener("mouseover", cambiar, false);
numero.addEventListener("mouseout", volver, false);
butRadio.onclick= function(){
    p.innerText = n.value;
    
}
function multiplicar(){
  
   var num= parseInt(p.textContent);
    p.innerText= num*3
}

function cambiar(){
    numero.style.background= "pink";
}

function volver(){
    numero.style.background= "white";
}