<?php
require_once 'config.php';

// Obtener categorías para el dropdown
$stmtCat = $pdo->query("SELECT id, nombre FROM categorias");
$categorias = $stmtCat->fetchAll();

$mensaje_exito = false;

// Manejar el envío del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'] ?? '';
    $descripcion = $_POST['descripcion'] ?? '';
    $precio = $_POST['precio'] ?? 0;
    $stock = $_POST['stock'] ?? 0;
    $categoria_id = $_POST['categoria'] ?? null;

    if ($nombre && $categoria_id) {
        $sql = "INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$nombre, $precio, $stock, $categoria_id]);
        $mensaje_exito = true;
    }
}
?>
<!DOCTYPE html>
<html lang="es" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Añadir Producto - Colección Premium</title>
    <link rel="stylesheet" href="index.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script>
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);
    </script>
    <style>
        .form-wrapper {
            padding: 4rem 0;
            animation: fadeIn 0.8s ease-out;
        }

        .form-container {
            max-width: 900px;
            margin: 0 auto;
            background: var(--card-bg);
            padding: 5rem;
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-xl);
            border: 1px solid var(--border);
            position: relative;
            overflow: hidden;
        }

        .form-container::before {
            content: '';
            position: absolute;
            top: -100px;
            right: -100px;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, var(--primary-soft) 0%, transparent 70%);
            z-index: 0;
        }

        .form-header {
            margin-bottom: 4rem;
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .form-header h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }

        .form-header h1 span {
            color: var(--primary);
        }

        .form-group {
            margin-bottom: 2.5rem;
            position: relative;
            z-index: 1;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
        }

        label {
            display: block;
            margin-bottom: 1rem;
            font-weight: 700;
            font-size: 1rem;
            color: var(--text-main);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        input, select, textarea {
            width: 100%;
            padding: 1.25rem 1.5rem;
            border-radius: var(--radius-sm);
            border: 1.5px solid var(--border);
            background: var(--bg);
            color: var(--text-main);
            font-size: 1.1rem;
            font-weight: 500;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--primary);
            background: var(--card-bg);
            box-shadow: 0 0 0 5px var(--primary-soft);
            transform: translateY(-2px);
        }

        textarea {
            height: 150px;
            resize: vertical;
        }

        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
            color: var(--text-muted);
            font-weight: 700;
            margin-bottom: 3rem;
            transition: all 0.3s;
            position: relative;
            z-index: 1;
        }

        .back-link:hover {
            color: var(--primary);
            transform: translateX(-5px);
        }

        .success-overlay {
            position: fixed;
            inset: 0;
            background: hsla(222, 47%, 7%, 0.6);
            backdrop-filter: blur(12px);
            display: <?php echo $mensaje_exito ? 'flex' : 'none'; ?>;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            animation: fadeIn 0.4s ease;
        }

        .success-card {
            background: var(--card-bg);
            padding: 4rem;
            border-radius: var(--radius-lg);
            text-align: center;
            max-width: 500px;
            border: 1px solid var(--border);
            box-shadow: var(--shadow-xl);
        }

        .success-icon {
            width: 80px;
            height: 80px;
            background: #dcfce7;
            color: #10b981;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            font-size: 2.5rem;
        }
    </style>
</head>

<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.php" class="logo">Tienda<span>Online</span></a>
            <div class="nav-actions">
                <ul class="nav-links">
                    <li><a href="index.php">Catálogo</a></li>
                    <li><a href="add-product.php" class="btn-nav">Añadir Nuevo</a></li>
                </ul>
                <button id="theme-toggle" class="theme-toggle">
                    <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </button>
            </div>
        </div>
    </nav>

    <div class="success-overlay" id="success-overlay">
        <div class="success-card">
            <div class="success-icon">✓</div>
            <h2>¡Registro Exitoso!</h2>
            <p style="color: var(--text-muted); margin-top: 1rem;">El producto ha sido añadido correctamente al inventario.</p>
        </div>
    </div>

    <div class="container form-wrapper">
        <div class="form-container">
            <a href="index.php" class="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Regresar al Catálogo
            </a>

            <div class="form-header">
                <h1>Nuevo <span>Producto</span></h1>
                <p style="color: var(--text-muted); font-size: 1.2rem;">Completa los detalles para expandir nuestra colección exclusiva.</p>
            </div>

            <form id="add-product-form" method="POST" action="add-product.php">
                <div class="form-group">
                    <label for="nombre">Nombre del Producto</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Ej. Estación de Carga Avanzada X-1" required>
                </div>

                <div class="form-group">
                    <label for="descripcion">Descripción Detallada</label>
                    <textarea id="descripcion" name="descripcion" placeholder="Describe las características únicas que hacen a este producto premium..." required></textarea>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="precio">Inversión ($)</label>
                        <input type="number" id="precio" name="precio" placeholder="0.00" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="stock">Disponibilidad Inicial</label>
                        <input type="number" id="stock" name="stock" placeholder="0" required>
                    </div>
                </div>

                <div class="form-group">
                    <label for="categoria">Categoría</label>
                    <select id="categoria" name="categoria" required>
                        <option value="" disabled selected>Define la categoría magistral</option>
                        <?php foreach ($categorias as $cat): ?>
                            <option value="<?php echo $cat['id']; ?>"><?php echo htmlspecialchars($cat['nombre']); ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>

                <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-top: 2rem;">
                    Consolidar Producto
                </button>
            </form>
        </div>
    </div>

    <script>
        // Theme Toggle Logic
        const themeBtn = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');

        function updateIcons(theme) {
            if (theme === 'dark') {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }

        updateIcons(document.documentElement.getAttribute('data-theme'));

        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcons(newTheme);
        });

        <?php if ($mensaje_exito): ?>
        setTimeout(() => {
            window.location.href = 'index.php';
        }, 2000);
        <?php endif; ?>
    </script>
</body>

</html>
