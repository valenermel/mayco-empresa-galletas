<?php
session_start();
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $location = $_POST['location'];
    // Suponiendo que el ID del camión es conocido (puedes obtenerlo dinámicamente)
    $truckId = 1; // Ejemplo, reemplaza con la lógica adecuada

    $stmt = $pdo->prepare("INSERT INTO truck_locations (truck_id, location) VALUES (?, ?)");
    $stmt->execute([$truckId, $location]);

    echo json_encode(['message' => 'Ubicación del camión registrada correctamente.']);
}
?>
