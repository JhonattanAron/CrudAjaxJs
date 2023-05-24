document.addEventListener('DOMContentLoaded', function() {
    let tablaHtml = document.getElementById("tabla")


    fetch("../php/clientes.php")
    .then(response => response.json())
    .then(data => {
        let tabla = "";
        tabla += "<table class=\"table\"><thead>  <tr>    <th scope=\"col\">ID</th>    <th scope=\"col\">Nombre</th>    <th scope=\"col\">Usuario</th>    <th scope=\"col\">Nivel</th> <th></th> <th></th> </tr></thead><tbody>";
        for(let i = 0 ; i < data.length ; i++){
            tabla += "<tr>";
            tabla += `<td>${data[i].id}</td>`;
            tabla += `<td>${data[i].nombre}</td>`;
            tabla += `<td>${data[i].username}</td>`;
            tabla += `<td>${data[i].nivel}</td>`;
            tabla += `<td> <button type="button" class="btn btn-success"><i class="bi bi-pencil-square"></i> Editar</button> </td>`;
            tabla += `<td> <button type="button" class="btn btn-danger"><i class="bi bi-trash3"></i> Eliminar</button> </td>`;
            tabla += "<tr>";
        }
        tablaHtml.innerHTML = tabla;
        
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });
    

});
