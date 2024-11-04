<?php
$host = 'localhost'; // Cambia esto si tu base de datos está en otro servidor
$db = 'mayco_app';
$user = 'root'; // Reemplaza con tu usuario de la base de datos
$pass = ''; // Reemplaza con tu contraseña de la base de datos

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Error de conexión: ' . $e->getMessage();
}
?>
