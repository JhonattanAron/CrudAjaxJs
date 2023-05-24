
var btn_clientes = document.getElementById("clientes").addEventListener("click" , cargarIframe , false);
var btn_catalogo = document.getElementById("catalogo").addEventListener("click" , cargarIframe , false);
var btn_tienda = document.getElementById("tienda").addEventListener("click" , cargarIframe , false);
var iframe = document.getElementById("iframe_panel");

function cargarIframe(e){
    switch(e.target){
        case clientes:
            iframe.src = "iframe/clientes.html";
            break;
        case catalogo:
            iframe.src = "iframe/catalogo.html";
            break;
        case tienda:
            iframe.src = "iframe/tienda.html";
            break;
    }
}
