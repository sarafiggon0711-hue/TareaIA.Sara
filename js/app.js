// Lógica principal de la aplicación SPA

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Configurar tema (Dark/Light mode)
    setupTheme();

    // Configurar eventos de navegación
    setupNavigation();

    // Enrutar la vista inicial
    handleRoute();

    // Escuchar cambios en la URL (hash)
    window.addEventListener('hashchange', handleRoute);
}

// --- Routing ---
function handleRoute() {
    let hash = window.location.hash.substring(1) || 'home';
    const appContainer = document.getElementById('app');
    
    // Simular que ciertas rutas requieren estar "logeado" (para propósitos de demostración)
    // En una app real esto validaría un token
    
    // Cargar la vista correspondiente
    if (views[hash]) {
        appContainer.innerHTML = views[hash]();
        
        // Ejecutar animaciones específicas de la vista si es necesario
        if (hash === 'adminDashboard' || hash === 'studentDashboard') {
            setTimeout(() => triggerChartAnimations(), 100);
        }
    } else {
        appContainer.innerHTML = `
            <div class="text-center mt-8 fade-in">
                <h1>404</h1>
                <p>Página no encontrada</p>
                <a href="#home" class="btn btn-primary mt-4">Volver al inicio</a>
            </div>
        `;
    }

    updateActiveNavLink(hash);
    
    // Cerrar menú móvil si está abierto
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

function updateActiveNavLink(currentHash) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentHash}`) {
            link.classList.add('active');
        }
    });
}

// --- Menú y Navegación ---
function setupNavigation() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// --- Theme (Dark Mode) ---
function setupTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, themeIcon);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconElement) {
    if (theme === 'light') {
        iconElement.className = 'ph ph-moon';
    } else {
        iconElement.className = 'ph ph-sun';
    }
}

// --- Modales y Autenticación (Simulada) ---
function openLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => resetLogin(), 300); // Resetear al cerrar después de la animación
}

function resetLogin() {
    document.querySelector('.login-options').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    document.querySelector('.login-header h2').innerText = 'Acceso Plataforma';
    document.querySelector('.login-header p').innerText = 'Selecciona tu perfil para ingresar';
}

function login(role) {
    // En lugar de hacer login real, simulamos el flujo
    // 1. Mostrar formulario
    document.querySelector('.login-options').classList.add('hidden');
    const form = document.getElementById('login-form');
    form.classList.remove('hidden');
    
    let roleName = '';
    if (role === 'student') roleName = 'Alumnado';
    if (role === 'teacher') roleName = 'Profesorado';
    if (role === 'family') roleName = 'Familias';
    if (role === 'admin') roleName = 'Administración';

    document.querySelector('.login-header h2').innerText = `Acceso ${roleName}`;
    document.querySelector('.login-header p').innerText = 'Ingresa tus credenciales';

    // Sobreescribir el submit para redirigir según el rol
    form.onsubmit = (e) => {
        e.preventDefault();
        closeLoginModal();
        
        // Redirigir al dashboard correspondiente
        window.location.hash = `${role}Dashboard`;
    };
}

function logout() {
    window.location.hash = 'home';
}

// --- Utilidades Visuales ---
function triggerChartAnimations() {
    const bars = document.querySelectorAll('.chart-bar-fill');
    // Para reiniciar la animación, primero quitamos la altura
    bars.forEach(bar => {
        const height = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = height;
        }, 50);
    });
}
