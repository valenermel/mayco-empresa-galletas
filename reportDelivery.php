<?php
session_start();
include 'db.php'; // Archivo para la conexión a la base de datos

if (!isset($_SESSION['username'])) {
    echo json_encode(["success" => false, "message" => "Debes estar logueado para registrar una entrega."]);
    exit();
}

$username = $_SESSION['username'];

// Obtener el ID del usuario basado en el nombre de usuario
$sql = "SELECT id FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
$user_id = $user['id']; // Asignar el ID del usuario

$data = json_decode(file_get_contents("php://input"), true);
$delivery_id = $data['delivery_id'];
$status = $data['status']; // Solo un valor
$additional_info = $data['additional_info'];

// Validar que se haya seleccionado un estado
if (empty($status)) {
    echo json_encode(["success" => false, "message" => "Debes seleccionar un estado."]);
    exit();
}

// Insertar el reporte en la base de datos
$sql = "INSERT INTO delivery_reports (delivery_id, user_id, status, additional_info) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $delivery_id, $user_id, $status, $additional_info);
$stmt->execute();

echo json_encode(["success" => true, "message" => "Entrega registrada exitosamente."]);

$stmt->close();
$conn->close();
?>
