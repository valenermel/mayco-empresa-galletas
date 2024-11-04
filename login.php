<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Verificar si el usuario existe
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['role'] = $user['role'];
        echo json_encode(['message' => 'Inicio de sesión exitoso.', 'role' => $user['role']]);
    } else {
        echo json_encode(['message' => 'Usuario o contraseña incorrectos.']);
    }
}
?>
