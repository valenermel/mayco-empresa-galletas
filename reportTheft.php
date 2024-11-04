<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $incidentDetails = $_POST['incidentDetails'];
    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare("INSERT INTO theft_reports (user_id, details) VALUES (?, ?)");
    $stmt->execute([$userId, $incidentDetails]);

    echo json_encode(['message' => 'Reporte de robo registrado correctamente.']);
}
?>
