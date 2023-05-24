<?php 

function conecionMysql(){
    $host = 'localhost';
    $user = 'root';
    $pass = '123456';
    $dt = 'login';
    $conexion = mysqli_connect($host , $user , $pass , $dt);

    return $conexion;
}


?>