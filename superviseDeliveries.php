<?php
session_start();
include 'db.php';

$stmt = $pdo->query("SELECT * FROM merchandise_status");
$deliveries = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['deliveries' => $deliveries]);
?>
