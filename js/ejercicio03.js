let pantalla = document.getElementById("Nav");
let pag = document.getElementById("Pag");
let cliente = document.getElementById("Cli");
document.addEventListener('mousemove', position);
let info=document.getElementById("info");
info.addEventListener('mousemove', overposition);
info.addEventListener('mouseout', clear)
info.addEventListener('click', overposition)
let texto = document.getElementById("Divt");
document.addEventListener('click',colorClick);
document.addEventListener('keypress',colorKey);

function overposition(e) {
    cliente.innerText = "Cliente = X: " + (e.clientX -8) + " Y: " + (e.clientY -8);
  }
function position(e) {
  info.style.backgroundColor = "white";
  texto.innerHTML ="Se ha movido el raton";
  pantalla.innerText = "Navegacion = X: " + e.screenX + " Y: " + e.screenY;
  pag.innerText = "Pagina = X: " + e.pageX + " Y: " + e.pageY;
  document.getElementById("objeto").innerHTML = "RATON "
}
function clear(){
    document.getElementById("Cli").innerHTML = ""
}


function colorClick(e) {
  info.style.backgroundColor = "#FFFFCC";
  texto.innerHTML ="Se hace click con el raton";
  pantalla.innerText = "Navegacion = X: " + e.screenX + " Y: " + e.screenY;
  pag.innerText = "Pagina = X: " + e.pageX + " Y: " + e.pageY;
  document.getElementById("objeto").innerHTML = "RATON "
}

function colorKey(event) {
  var e = event;
  info.style.backgroundColor = "#CCE6FF";
  texto.innerHTML ="Se pulsa una tecla";
  document.getElementById("objeto").innerHTML = "TECLADO";
  pantalla.innerText = "Caracter: [" + event.key + "]";
  pag.innerText = "Caracter: [" + e.charCode + "]";
  cliente.innerText = " ";

}