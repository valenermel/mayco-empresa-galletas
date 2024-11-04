<?php
$servername = "localhost"; // Cambia esto según tu configuración
$username = "root"; // Cambia esto a tu usuario de la base de datos
$password = ""; // Cambia esto a tu contraseña de la base de datos
$dbname = "mayco_control";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
