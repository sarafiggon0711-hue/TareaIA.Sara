-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS tienda_online;
USE tienda_online;

-- Tabla 1: Categorías (El lado "1" de la relación)
CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Tabla 2: Productos (El lado "Muchos" de la relación)
-- Relacionada mediante la Clave Foránea 'categoria_id'
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    categoria_id INT,
    CONSTRAINT fk_categoria_producto
        FOREIGN KEY (categoria_id)
        REFERENCES categorias(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Insertar datos de ejemplo en Categorías
INSERT INTO categorias (nombre, descripcion) VALUES
('Electrónica', 'Dispositivos y gadgets tecnológicos'),
('Hogar', 'Artículos para el hogar y decoración'),
('Deportes', 'Equipamiento y ropa deportiva');

-- Insertar datos de ejemplo en Productos
-- Notar cómo varios productos pertenecen a la misma categoría (1:N)
INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES
('Smartphone S21', 799.99, 50, 1),
('Laptop Pro 14', 1200.00, 20, 1),
('Aspiradora Robot', 250.00, 15, 2),
('Balón de Fútbol', 25.00, 100, 3),
('Camiseta Running', 19.50, 45, 3);

-- Consulta para verificar la relación
-- SELECT p.nombre, c.nombre AS categoria FROM productos p JOIN categorias c ON p.categoria_id = c.id;
