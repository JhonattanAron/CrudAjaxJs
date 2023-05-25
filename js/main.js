document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("usuarios").addEventListener("click", cargarIframe, false);
    document.getElementById("catalogo").addEventListener("click", cargarIframe, false);
    document.getElementById("tienda").addEventListener("click", cargarIframe, false);
    var iframe = document.getElementById("iframe_panel");

    function cargarIframe(e) {
        switch (e.target) {
            case usuarios:
                iframe.src = "iframe/usuarios.html";
                break;
            case catalogo:
                iframe.src = "iframe/catalogo.html";
                break;
            case tienda:
                iframe.src = "iframe/tienda.html";
                break;
        }
    }

});
