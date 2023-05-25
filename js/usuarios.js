document.addEventListener('DOMContentLoaded', function () {
    //obetner la tabla 
    ObetnerTabla();

});


function ObetnerTabla() {
    fetch("../php/usuarios.php")
        .then(response => response.json())
        .then(data => {
            let tablaHtml = document.getElementById("tabla");

            modalId.readOnly = true;

            let arrayDataUsuario = [];
            let tabla = "";
            tabla += "<table class=\"table\"><thead>  <tr>    <th scope=\"col\">ID</th>    <th scope=\"col\">Nombre</th>    <th scope=\"col\">Usuario</th>    <th scope=\"col\">Nivel</th> <th></th> <th></th> </tr></thead><tbody>";
            for (let i = 0; i < data.length; i++) {
                tabla += "<tr>";
                tabla += `<td>${data[i].id}</td>`;
                tabla += `<td>${data[i].nombre}</td>`;
                tabla += `<td>${data[i].username}</td>`;
                tabla += `<td>${data[i].nivel}</td>`;
                tabla += `<td> <button id="btnEditar${i}" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#formUsuarios"><img src="../svg/pencil-square.svg" alt="edit"> Editar</button> </td>`;
                tabla += `<td> <button id="btnEliminar${i}" type="button" class="btn btn-danger"><img src="../svg/trash3.svg" alt="edit"> Eliminar</button> </td>`;
                tabla += "<tr>";
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

