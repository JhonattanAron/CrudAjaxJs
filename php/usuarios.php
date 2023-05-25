<?php 
include("conexion.php");
$conexion = conecionMysql();
$query = "SELECT * FROM usuarios";

$resultado = mysqli_query($conexion, $query);

if ($row = mysqli_fetch_assoc($resultado)) {
    $data = array();
    do {
        $data[] = $row;
    } while ($row = mysqli_fetch_assoc($resultado));

    echo json_encode($data);
} else {
    echo "error";
}
?>