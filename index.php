<?php
require_once 'config.php';

// Obtener categorías para el mapeo en JS (opcional, pero útil)
$stmtCat = $pdo->query("SELECT id, nombre FROM categorias");
$categoriasMap = [];
while ($row = $stmtCat->fetch()) {
    $categoriasMap[$row['id']] = $row['nombre'];
}

// Obtener productos con el nombre de su categoría
$query = "SELECT p.*, c.nombre as categoria_nombre 
          FROM productos p 
          JOIN categorias c ON p.categoria_id = c.id 
          ORDER BY p.id DESC";
$stmtProd = $pdo->query($query);
$productos = $stmtProd->fetchAll();
?>
<!DOCTYPE html>
<html lang="es" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda Premium - Innovación en cada detalle</title>
    <link rel="stylesheet" href="index.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script>
        // Inicialización inmediata del tema para evitar parpadeos
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', savedTheme);
    </script>
</head>

<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.php" class="logo">Tienda<span>Online</span></a>
            
            <div class="nav-actions">
                <div class="search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" id="product-search" placeholder="Buscar productos...">
                </div>

                <ul class="nav-links">
                    <li><a href="#product-section">Catálogo</a></li>
                    <li><a href="add-product.php" class="btn-nav">Añadir Nuevo</a></li>
                </ul>

                <button id="theme-toggle" class="theme-toggle" title="Cambiar tema">
                    <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </button>
            </div>
        </div>
    </nav>

    <div class="container">
        <header class="hero">
            <div class="hero-content">
                <h1>Descubre Tecnología <span>Premium</span></h1>
                <p>Nuestra colección curada de los mejores productos del mercado, ahora con envío global gratuito.</p>
                <div style="display: flex; gap: 1rem;">
                    <a href="#product-section" class="btn-primary">Explorar Ahora</a>
                    <a href="#" class="btn-primary" style="background: var(--bg); color: var(--text-main); border: 1px solid var(--border); box-shadow: none;">Más Información</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="media/hero-featured.png" alt="Featured Tech">
            </div>
        </header>

        <section id="product-section">
            <div class="section-header">
                <div>
                    <h2>Catálogo Exclusive</h2>
                    <p class="section-subtitle">Lo mejor en electrónica y estilo de vida</p>
                </div>
                <span class="badge" id="product-count"><?php echo count($productos); ?> Disponibles</span>
            </div>
            
            <main id="product-list" class="product-grid">
                <?php if (empty($productos)): ?>
                    <div class="no-results">No hay productos disponibles por ahora.</div>
                <?php else: ?>
                    <?php foreach ($productos as $producto): ?>
                        <div class="product-card" onclick='showProductDetails(<?php echo json_encode($producto); ?>)'>
                            <div class="card-image">
                                <img src="media/<?php 
                                    if($producto['categoria_id'] == 1) echo 'laptop.png';
                                    elseif($producto['categoria_id'] == 2) echo 'vacuum.png';
                                    else echo 'soccer_ball.png';
                                ?>" alt="<?php echo htmlspecialchars($producto['nombre']); ?>">
                                <div class="card-overlay">
                                    <span>Quick View</span>
                                </div>
                            </div>
                            <div class="card-content">
                                <span class="category"><?php echo htmlspecialchars($producto['categoria_nombre']); ?></span>
                                <h3><?php echo htmlspecialchars($producto['nombre']); ?></h3>
                                <div class="card-footer">
                                    <div class="price">$<?php echo number_format($producto['precio'], 2); ?></div>
                                    <div class="stock">
                                        <span class="stock-dot <?php echo $producto['stock'] > 20 ? 'in-stock' : 'low-stock'; ?>"></span>
                                        <?php echo $producto['stock']; ?> uds
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </main>
        </section>
    </div>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="#" class="logo">Tienda<span>Online</span></a>
                    <p>Elevando el estándar de la tecnología personal con productos curados y un servicio excepcional.</p>
                </div>
                <div class="footer-column">
                    <h4>Comprar</h4>
                    <ul>
                        <li><a href="#">Electrónica</a></li>
                        <li><a href="#">Hogar</a></li>
                        <li><a href="#">Deportes</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Soporte</h4>
                    <ul>
                        <li><a href="#">Envíos</a></li>
                        <li><a href="#">Garantía</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Términos</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Tienda Online Premium. Todos los derechos reservados.</p>
                <p>Diseño por Antigravity</p>
            </div>
        </div>
    </footer>

    <!-- Modal para descripción detallada -->
    <div id="product-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div class="modal-image">
                    <img id="modal-img" src="" alt="">
                </div>
                <div class="modal-info">
                    <span id="modal-category" class="category"></span>
                    <h2 id="modal-title"></h2>
                    <p id="modal-description" class="description"></p>
                    <div class="modal-features">
                        <ul id="modal-features-list">
                            <li>Diseño Aeroespacial</li>
                            <li>Garantía de 2 años</li>
                            <li>Eficiencia Energética A+++</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <div id="modal-price" class="price"></div>
                        <div id="modal-stock" class="stock-badge"></div>
                    </div>
                    <button class="btn-primary" style="width: 100%; justify-content: center;">Añadir al Carrito</button>
                </div>
            </div>
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

        // Mapeo de categorías para imágenes (UI placeholder logic)
        const catImages = {
            1: 'media/laptop.png',
            2: 'media/vacuum.png',
            3: 'media/soccer_ball.png'
        };

        function showProductDetails(producto) {
            const modal = document.getElementById('product-modal');
            
            document.getElementById('modal-img').src = catImages[producto.categoria_id] || 'media/laptop.png';
            document.getElementById('modal-category').textContent = producto.categoria_nombre;
            document.getElementById('modal-title').textContent = producto.nombre;
            document.getElementById('modal-description').textContent = producto.descripcion || 'Este producto representa la cima de la innovación en su categoría, combinando rendimiento extremo con un diseño sofisticado.';
            document.getElementById('modal-price').textContent = `$${parseFloat(producto.precio).toFixed(2)}`;
            
            const stockBadge = document.getElementById('modal-stock');
            stockBadge.textContent = `${producto.stock} en stock`;
            stockBadge.className = `stock-badge ${producto.stock > 20 ? 'in-stock' : 'low-stock'}`;

            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Cerrar Modal
        document.querySelector('.close-modal').addEventListener('click', () => {
            document.getElementById('product-modal').classList.remove('show');
            document.body.style.overflow = 'auto';
        });

        window.onclick = (event) => {
            const modal = document.getElementById('product-modal');
            if (event.target == modal) {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        };

        // Búsqueda (Filtro local)
        document.getElementById('product-search').addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.product-card');
            let count = 0;

            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const cat = card.querySelector('.category').textContent.toLowerCase();
                if (title.includes(term) || cat.includes(term)) {
                    card.style.display = 'flex';
                    count++;
                } else {
                    card.style.display = 'none';
                }
            });

            document.getElementById('product-count').textContent = `${count} Disponibles`;
        });
    </script>
</body>

</html>
