document.addEventListener('DOMContentLoaded', function() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            if (data.length > 0) {
                var datosTabla = "";
                datosTabla += "<table class=\"table\"><thead> <tr><th scope=\"col\">ID</th>  <th scope=\"col\">Usuario</th>  <th scope=\"col\">Nivel</th> <th></th> <th></th> </tr> </thead><tbody>";
                editarArray = [];
                for (let i = 0; i < data.length; i++) {
                    datosTabla += "<tr>";
                    datosTabla += "<td id='data_id"+ i +"' >" + data[i].id + "</td>";
                    datosTabla += "<td>" + data[i].nombre + "</td>";
                    datosTabla += "<td>" + data[i].nivel + "</td>";
                    datosTabla += "<td>" + "<button data-bs-toggle=\"modal\" data-bs-target=\"#editar\" class=\"btn btn-primary\" id='btn_editar"+ i +"'>Editar</button>" + "</td>";
                    datosTabla += "<td>" + "<button class=\"btn btn-danger\">Eliminar</button>" + "</td>";
                    datosTabla += "<tr>";
                    editarArray[i] = i;
                }

                datosTabla += " </tbody></table>";
            }

            document.getElementById("tabla").innerHTML = datosTabla;

            // Obtener los datos para el modal editar
            for(let i = 0 ; i < editarArray.length ; i++){
                document.getElementById("btn_editar"+ i).addEventListener("click" , function() {
                    editarDatos(i);
                }, false);
            }


            function editarDatos(id){
                var txt_id = document.getElementById("editar_id");
                var txt_usuario = document.getElementById("editar_usuario");
                txt_id.value = data[id].id;
                txt_usuario.value = data[id].nombre;
            }
        }
    };

    xhttp.open("GET", "../php/clientes.php");
    xhttp.send();
});
