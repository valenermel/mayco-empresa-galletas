<?php
session_start();
include 'db.php';

$stmt = $pdo->query("SELECT * FROM truck_locations");
$trucks = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['trucks' => $trucks]);
?>
