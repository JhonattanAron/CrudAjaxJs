<?php 
include("../conexion.php");

if (isset($_POST['modalId'])) {
    $modalId = $_POST['modalId'];
    $modalNombre = $_POST['modalNombre'];
    $modalUsuario = $_POST['modalUsuario'];
    $modalNivel = $_POST['modalNivel'];

    echo editarUsuarios($modalId , $modalNombre , $modalUsuario , $modalNivel);


    
}else{
    echo json_encode("error");
}


function editarUsuarios($id, $nombre, $usuario, $nivel) {
    $conexion = conecionMysql();
    try {
        $query = "UPDATE usuarios SET nombre = '$nombre', username = '$usuario', nivel = '$nivel' WHERE id = $id";
        $resultado = mysqli_query($conexion, $query);
        if ($resultado) {
            $mensaje = "Exito";
        } else {
            throw new Exception(mysqli_error($conexion));
        }
    } catch (Exception $ex) {
        $mensaje = "Ha ocurrido un error: " . $ex->getMessage();
    }

    return json_encode($mensaje);
}






?>