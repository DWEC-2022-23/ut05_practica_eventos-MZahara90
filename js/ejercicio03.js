let pantalla = document.getElementById("Nav");
let pag = document.getElementById("Pag");
let cliente = document.getElementById("Cli");
document.addEventListener('mousemove', position);
let info=document.getElementById("info");
info.addEventListener('mousemove', overposition);
info.addEventListener('mouseout', clear)

cliente.innerText = "Cliente = X: " + e.clientX + " Y: " + e.clientY;
function overposition(e) {
    cliente.innerText = "Cliente = X: " + (e.clientX -8) + " Y: " + (e.clientY -8);
  }
function position(e) {
  pantalla.innerText = "Navegacion = X: " + e.screenX + " Y: " + e.screenY;
  pag.innerText = "Pagina = X: " + e.pageX + " Y: " + e.pageY;
  document.getElementById("objeto").innerHTML = "RATON"
}
function clear(){
    document.getElementById("Cli").innerHTML = ""
}
