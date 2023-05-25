<?php 
if (isset($_POST['modalId'])) {
    $modalId = $_POST['modalId'];
    $modalNombre = $_POST['modalNombre'];
    $modalUsuario = $_POST['modalUsuario'];
    $modalNivel = $_POST['modalNivel'];

    // Aquí puedes hacer lo que necesites con los datos recibidos
    // Por ejemplo, imprimir los valores para verificar que se recibieron correctamente

    echo json_encode("modalId: " . $modalId . "<br>");
    echo json_encode("modalNombre: " . $modalNombre . "<br>");
    echo json_encode("modalUsuario: " . $modalUsuario . "<br>");
    echo json_encode("modalNivel: " . $modalNivel . "<br>");
}else{
    echo json_encode("error");
}





?>