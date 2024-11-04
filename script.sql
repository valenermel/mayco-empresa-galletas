-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS mayco_control;

-- Usar la base de datos
USE mayco_control;

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profession ENUM('empleado', 'administrador') NOT NULL
);

-- Crear la tabla de reportes de entrega
CREATE TABLE IF NOT EXISTS delivery_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    delivery_id INT NOT NULL,
    status ENUM('OK', 'Falla', 'Robo') NOT NULL,
    additional_info TEXT,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
