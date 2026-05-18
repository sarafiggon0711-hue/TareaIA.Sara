<?php
/**
 * Configuración de la base de datos (Plantilla)
 * 
 * Renombra este archivo a 'config.php' y completa 
 * los datos con tu propia configuración.
 */

$host = 'localhost';
$db = 'nombre_de_tu_base_de_datos';
$user = 'tu_usuario';
$pass = 'tu_contraseña'; // Por defecto en XAMPP suele ir vacío ''
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    $errorCode = isset($e->errorInfo[1]) ? $e->errorInfo[1] : $e->getCode();
    $errorMsg = $e->getMessage();

    if ($errorCode == 1049 || strpos($errorMsg, '1049') !== false) {
        die("Error de Base de Datos: La base de datos no existe.");
    } elseif ($errorCode == 2002 || $errorCode == 1045 || strpos($errorMsg, '2002') !== false || strpos($errorMsg, '1045') !== false) {
        die("Error de Conexión: No se pudo conectar a MySQL.");
    } else {
        die("Error Fatal: " . htmlspecialchars($errorMsg));
    }
}
