<?php 
if (isset($_POST['modalId'])) {
    $modalId = $_POST['modalId'];
    $modalNombre = $_POST['modalNombre'];
    $modalUsuario = $_POST['modalUsuario'];
    $modalNivel = $_POST['modalNivel'];


    echo json_encode("modalId: " . $modalId . "<br>");
    echo json_encode("modalNombre: " . $modalNombre . "<br>");
    echo json_encode("modalUsuario: " . $modalUsuario . "<br>");
    echo json_encode("modalNivel: " . $modalNivel . "<br>");
}else{
    echo json_encode("error");
}





?>