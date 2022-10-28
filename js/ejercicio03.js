let navegador = document.getElementById("Nav");
let contenedor = document.getElementById("contenedor");
let explicaciones = document.getElementById("explicaciones");
let pag = document.getElementById("Pag");
let cliente = document.getElementById("Cli");
let pantalla = document.getElementById("Pan");
document.addEventListener('mousemove', position);
let info=document.getElementById("info");
info.addEventListener('mousemove', overposition);
info.addEventListener('mouseout', clear)
info.addEventListener('click', overposition)
let texto = document.getElementById("Divt");
document.addEventListener('click',colorClick);
document.addEventListener('keypress',colorKey);

function overposition(e) {
  var rect = info.getBoundingClientRect();
    cliente.innerText = "Cliente = [X: " + (e.clientX - rect.left) + ", Y: " + (e.clientY - rect.top) + "]";
  }
function position(e) {
  info.style.backgroundColor = "white";
  texto.innerHTML ="Se ha movido el raton";
  navegador.innerText = "Navegador = [X: " + (e.pageX + (window.outerWidth-window.innerWidth))  + ", Y: " + (e.pageY + (window.outerHeight -window.innerHeight)) + "]";
  pag.innerText = "Pagina = [X: " + e.pageX + ", Y: " + e.pageY + "]";
  pantalla.innerText = "Pantalla = [X: " + e.screenX + ", Y: " + e.screenY + "]";
  document.getElementById("objeto").innerHTML = "RATON "
  explicaciones.style.display = "inline"
}
function clear(){
    document.getElementById("Cli").innerHTML = ""
}


function colorClick(e) {
  info.style.backgroundColor = "#FFFFCC";
  texto.innerHTML ="Se hace click con el raton";
  navegador.innerText = "Navegador = [X: " + (e.pageX + (window.outerWidth-window.innerWidth))  + ", Y: " + (e.pageY + (window.outerHeight -window.innerHeight)) + "]";
  pag.innerText = "Pagina = [X: " + e.pageX + ", Y: " + e.pageY + "]";
  pantalla.innerText = "Pantalla = [X: " + e.screenX + ", Y: " + e.screenY + "]";
  document.getElementById("objeto").innerHTML = "RATON "
  explicaciones.style.display = "inline"
}

function colorKey(event) {
  var e = event;
  info.style.backgroundColor = "#CCE6FF";
  texto.innerHTML ="Se pulsa una tecla";
  document.getElementById("objeto").innerHTML = "TECLADO";
  navegador.innerText = "Caracter: [" + event.key + "]";
  pag.innerText = "Caracter: [" + e.charCode + "]";
  cliente.innerText = " ";
  pantalla.innerText = " ";
  explicaciones.style.display = "none";
}