<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $role = $_POST['role'] ?? 'employee';

    // Verificar si el usuario ya existe
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    if ($stmt->rowCount() > 0) {
        echo json_encode(['message' => 'El usuario ya existe.']);
        exit;
    }

    // Hashear la contraseña y registrar al usuario
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
    if ($stmt->execute([$username, $hashedPassword, $role])) {
        echo json_encode(['message' => 'Usuario registrado exitosamente.']);
    } else {
        echo json_encode(['message' => 'Error al registrar usuario.']);
    }
}
?>
