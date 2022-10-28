const e1 = document.getElementById("enlace_1");
const e2 = document.getElementById("enlace_2");
const e3 = document.getElementById("enlace_3");

e1.addEventListener("click",accion1,false);
e2.addEventListener("click", accion2, false);
e3.addEventListener("click", accion3, false);


function accion1(){
    if(document.getElementById("contenidos_1").style.display!= "none"){
        document.getElementById("contenidos_1").style.display = "none";
        e1.innerHTML="Mostrar contenido"
    }else{
        document.getElementById("contenidos_1").style.display = "block";
        e1.innerHTML="Ocultar contenido"
    }
}

function accion2(){
    if(document.getElementById("contenidos_2").style.display!= "none"){
        document.getElementById("contenidos_2").style.display = "none";
        e2.innerHTML="Mostrar contenido"
    }else{
        document.getElementById("contenidos_2").style.display = "block";
        e2.innerHTML="Ocultar contenido"
    }
}

function accion3(){
    if(document.getElementById("contenidos_3").style.display!= "none"){
        document.getElementById("contenidos_3").style.display = "none";
        e3.innerHTML="Mostrar contenido"
    }else{
        document.getElementById("contenidos_3").style.display = "block";
        e3.innerHTML="Ocultar contenido"
    }
}