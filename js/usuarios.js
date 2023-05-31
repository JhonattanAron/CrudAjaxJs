document.addEventListener('DOMContentLoaded', function () {
    //obetner la tabla 
    obetnerTabla();
    document.getElementById("modalFormUsuarios").addEventListener("submit", enviarDatos, false);

});


function obetnerTabla() {
    fetch("../php/usuarios/usuarios.php")
        .then(response => response.json())
        .then(data => {
            let tablaHtml = document.getElementById("tabla");
            modalId.readOnly = true;
            let arrayDataUsuario = [];
            let tabla = ``;


            tabla += `<table class=\"table\"><thead>  <tr>    <th scope=\"col\">ID</th>    <th scope=\"col\">Nombre</th>    <th scope=\"col\">Usuario</th>    <th scope=\"col\">Nivel</th> <th></th> <th></th> </tr></thead><tbody>`;
            for (let i = 0; i < data.length; i++) {
                tabla += `<tr>
                <td>${data[i].id}</td>
                <td>${data[i].nombre}</td>
                <td>${data[i].username}</td>
                <td>${data[i].nivel}</td>
                <td> <button id="btnEditar${i}" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#formUsuarios"><img src="../svg/pencil-square.svg" alt="edit"> Editar</button> </td>
                <td> <button id="btnEliminar${i}" type="button" class="btn btn-danger"><img src="../svg/trash3.svg" alt="edit"> Eliminar</button> </td>
                <tr>`;
                arrayDataUsuario[i] = i;
            }
            tablaHtml.innerHTML = tabla;

            //poner en esucha el boton para el modal editar
            for (let i = 0; i < arrayDataUsuario.length; i++) {
                document.getElementById(`btnEditar${i}`).addEventListener("click", function () {
                    datosModalEditar(i, data)
                }, false)
            }
        })

        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
}


function datosModalEditar(id, data) {
    let modalId = document.getElementById("modalId");
    let modalNombre = document.getElementById("modalNombre");
    let modalUsuario = document.getElementById("modalUsuario");
    let modalNivel = document.getElementById("modalNivel");
    modalId.value = data[id].id;
    modalNombre.value = data[id].nombre;
    modalUsuario.value = data[id].username;
    modalNivel.value = data[id].nivel;
}

function enviarDatos(e){
    e.preventDefault();
    mostrarOverlay();
    let formulario = document.getElementById("modalFormUsuarios");
    var datos = new FormData(formulario);
    
    
    fetch("../php/usuarios/enviarUsuarios.php" ,{
        method : "POST",
        body : datos
    })
    .then(response => response.json())
    .then(data => {
        let alert = document.getElementById("alert");
        if (data != "Exito") {
            alert.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Error!</strong> Al Editar el Usuario
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `
        }else{
            alert.innerHTML = `
            <div class="alert alert-success  alert-dismissible fade show" role="alert">
              <strong>Exito!</strong> ${data} Al registrar el Usuario
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            `
        }
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
    })
    .finally(() =>{
        obetnerTabla();
    })
}

function mostrarOverlay() {
    var overlay = document.getElementById("loading-overlay");
    var spinner = document.getElementById("spinner");
    overlay.style.position = "fixed";
    spinner.style.display = "block";
    overlay.style.width = "100%";
      overlay.style.height = "100%";
    
    // Ocultar el overlay después de 3 segundos
    setTimeout(function() {
      overlay.style.position = "none";
      overlay.style.width = "0px";
      overlay.style.height = "0px";
      spinner.style.display = "none";
    }, 500); // 3000 milisegundos = 3 segundos
  }
  

