<?php
session_start();
include 'db.php'; // Incluye el archivo de conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $status = $_POST['status'];
    $userId = $_SESSION['user_id']; // Suponiendo que tienes el ID del usuario en la sesión

    $stmt = $pdo->prepare("INSERT INTO merchandise_status (user_id, status) VALUES (?, ?)");
    $stmt->execute([$userId, $status]);

    echo json_encode(['message' => 'Estado de la mercadería registrado correctamente.']);
}
?>
