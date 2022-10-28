
const numero = document.getElementById("numdiv");
const inN = document.getElementById("inputNumber")
const boton = document.getElementById("boton")
const textNum = document.getElementById("textNum")


numero.addEventListener("dblclick", multiplicar, false);
numero.addEventListener("mouseover", cambiar, false);
numero.addEventListener("mouseout", volver, false);
textNum.addEventListener("mouseover", cambiar, false);
textNum.addEventListener("mouseout", volver, false);

boton.onclick= function(){

    textNum.innerText = inN.value;
}

function multiplicar(){
  
   var num= parseInt(textNum.textContent);
   textNum.innerText= num*3;
}

function cambiar(){
    numero.style.background= "#DFFFEF";
    textNum.style.color="#34AA6C";
    textNum.style.fontSize="50px";
    numero.style.border="3px solid #34AA6C";
}

function volver(){
    numero.style.background= "white";
    textNum.style.color="black";
    textNum.style.fontSize="30px";
    numero.style.border="1px solid black";
    
}

