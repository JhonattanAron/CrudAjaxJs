document.addEventListener('DOMContentLoaded', function() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            let datosTabla = "";
            if (data.length > 0) {
                
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
                    editarDatos(data,  i);
                }, false);
            }
        }
    };

    xhttp.open("GET", "../php/clientes.php");
    xhttp.send();

    function editarDatos(data, id){
        let txt_id = document.getElementById("editar_id");
        let txt_usuario = document.getElementById("editar_usuario");
        let optionLevel = document.getElementById("editar_nivel")
        txt_id.value = data[id].id;
        txt_usuario.value = data[id].nombre;
        let nivel =  data[id].nivel;
        console.log(nivel)

        optionLevel.value = nivel;

    }

});
