const e1 = document.getElementById("enlace_1");
const e2 = document.getElementById("enlace_2");
const e3 = document.getElementById("enlace_3");

e1.addEventListener("click",muestraOculta,false);
e2.addEventListener("click", muestraOculta2, false);
e3.addEventListener("click", muestraOculta3, false);

function muestraOculta() {
    document.getElementById("contenidos_1").style.display = "none";
    e1.innerHTML="Volver a mostrar codigo"
    e1.removeEventListener("click", muestraOculta, false);
    e1.addEventListener("click", mostrar, false);
}
function mostrar(){
    document.getElementById("contenidos_1").style.display = "inline";
    e1.innerHTML="<br/>Ocultar contenidos"
    e1.removeEventListener("click", mostrar, false);
    e1.addEventListener("click",muestraOculta,false);
}

function muestraOculta2() {
    console.log();
    document.getElementById("contenidos_2").style.display = "none";
    e2.innerHTML="Volver a mostrar codigo"
    e2.removeEventListener("click", muestraOculta2, false);
    e2.addEventListener("click", mostrar2, false);
}
function mostrar2(){
    document.getElementById("contenidos_2").style.display = "inline";
    e2.innerHTML="<br/>Ocultar contenidos"
    e2.removeEventListener("click", mostrar2, false);
    e2.addEventListener("click",muestraOculta2,false);
}

function muestraOculta3() {
    
    document.getElementById("contenidos_3").style.display = "none";
    e3.innerHTML="Volver a mostrar codigo"
    e3.removeEventListener("click", muestraOculta3, false);
    e3.addEventListener("click", mostrar3, false);
}
function mostrar3(){
    document.getElementById("contenidos_3").style.display = "inline";
    e3.innerHTML="<br/>Ocultar contenidos"
    e3.removeEventListener("click", mostrar3, false);
    e3.addEventListener("click",muestraOculta3,false);
}