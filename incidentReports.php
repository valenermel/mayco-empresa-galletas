<?php
session_start();
include 'db.php';

$stmt = $pdo->query("SELECT * FROM theft_reports");
$reports = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(['reports' => $reports]);
?>
