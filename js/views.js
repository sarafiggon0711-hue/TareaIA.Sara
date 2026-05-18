// Componentes y Vistas de la aplicación

const views = {
    home: () => `
        <div class="fade-in">
            <section class="hero">
                <div class="hero-bg"></div>
                <h1 class="text-gradient">Transformando la educación a través de la digitalización</h1>
                <p>Plataforma integral que conecta a estudiantes, profesores y familias en un entorno seguro, moderno y eficiente.</p>
                <div class="flex gap-4 mt-4">
                    <button class="btn btn-primary" onclick="openLoginModal()">
                        Acceder a la plataforma <i class="ph ph-arrow-right"></i>
                    </button>
                    <a href="#platform" class="btn btn-secondary">Descubrir más</a>
                </div>
            </section>

            <section class="mt-8 mb-8">
                <div class="text-center mb-8">
                    <h2>Ventajas de Colegio Digital</h2>
                    <p class="text-secondary">Todo lo que necesitas para una gestión educativa de excelencia</p>
                </div>
                <div class="grid grid-cols-4 gap-6">
                    <div class="card">
                        <div class="card-icon">
                            <i class="ph ph-squares-four"></i>
                        </div>
                        <h3>Gestión centralizada</h3>
                        <p class="text-secondary">Administra calificaciones, asistencias y recursos desde un único panel de control intuitivo.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <i class="ph ph-chats-circle"></i>
                        </div>
                        <h3>Comunicación directa</h3>
                        <p class="text-secondary">Canales seguros y directos entre profesorado, alumnado y familias sin intermediarios.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <i class="ph ph-devices"></i>
                        </div>
                        <h3>Acceso 24/7</h3>
                        <p class="text-secondary">Diseño responsive para acceder a la información desde cualquier dispositivo en cualquier momento.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <i class="ph ph-shield-check"></i>
                        </div>
                        <h3>Seguridad avanzada</h3>
                        <p class="text-secondary">Protección de datos garantizada con protocolos de encriptación de última generación.</p>
                    </div>
                </div>
            </section>
        </div>
    `,

    studentDashboard: () => `
        <div class="fade-in">
            <div class="dashboard-header">
                <div>
                    <h2>Portal del Alumnado</h2>
                    <p class="text-secondary">Bienvenido de nuevo, Carlos. Tienes 3 tareas pendientes.</p>
                </div>
                <button class="btn btn-secondary" onclick="logout()"><i class="ph ph-sign-out"></i> Cerrar sesión</button>
            </div>

            <div class="dashboard-stats">
                <div class="stat-card">
                    <div class="stat-icon" style="background: rgba(37, 99, 235, 0.1); color: var(--primary);">
                        <i class="ph ph-books"></i>
                    </div>
                    <div class="stat-info">
                        <h4>Asignaturas</h4>
                        <p>8</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: rgba(245, 158, 11, 0.1); color: var(--warning);">
                        <i class="ph ph-clipboard-text"></i>
                    </div>
                    <div class="stat-info">
                        <h4>Tareas Pendientes</h4>
                        <p>3</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: rgba(16, 185, 129, 0.1); color: var(--success);">
                        <i class="ph ph-chart-line-up"></i>
                    </div>
                    <div class="stat-info">
                        <h4>Nota Media</h4>
                        <p>8.5</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: rgba(139, 92, 246, 0.1); color: #8b5cf6;">
                        <i class="ph ph-bell-ringing"></i>
                    </div>
                    <div class="stat-info">
                        <h4>Notificaciones</h4>
                        <p>5</p>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid">
                <div class="panel">
                    <div class="panel-header">
                        <h3>Próximas Entregas</h3>
                        <a href="#" class="btn-ghost" style="font-size: 14px;">Ver todas</a>
                    </div>
                    <div class="list">
                        <div class="list-item">
                            <div class="list-item-icon"><i class="ph ph-file-pdf"></i></div>
                            <div class="list-item-content">
                                <h4>Trabajo de Historia</h4>
                                <p>Historia del Arte • Vence hoy a las 23:59</p>
                            </div>
                            <span style="color: var(--warning); font-size: 12px; font-weight: 600;">Pendiente</span>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon"><i class="ph ph-function"></i></div>
                            <div class="list-item-content">
                                <h4>Ejercicios de Álgebra</h4>
                                <p>Matemáticas • Vence mañana</p>
                            </div>
                            <span style="color: var(--warning); font-size: 12px; font-weight: 600;">Pendiente</span>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon"><i class="ph ph-flask"></i></div>
                            <div class="list-item-content">
                                <h4>Informe de Laboratorio</h4>
                                <p>Química • Vence en 3 días</p>
                            </div>
                            <span style="color: var(--warning); font-size: 12px; font-weight: 600;">Pendiente</span>
                        </div>
                    </div>
                </div>

                <div class="panel">
                    <div class="panel-header">
                        <h3>Calendario Escolar</h3>
                    </div>
                    <div style="text-align: center; padding: 20px 0; color: var(--text-secondary);">
                        <i class="ph ph-calendar-blank" style="font-size: 48px; margin-bottom: 10px;"></i>
                        <p>Hoy: Clase de Física a las 11:30</p>
                    </div>
                    <button class="btn btn-secondary w-full mt-4">Abrir Calendario Completo</button>
                </div>
            </div>
        </div>
    `,

    teacherDashboard: () => `
        <div class="fade-in">
            <div class="dashboard-header">
                <div>
                    <h2>Portal del Profesorado</h2>
                    <p class="text-secondary">Bienvenida, Prof. Martínez. Hoy tienes 4 clases programadas.</p>
                </div>
                <button class="btn btn-secondary" onclick="logout()"><i class="ph ph-sign-out"></i> Cerrar sesión</button>
            </div>
            
            <div class="grid grid-cols-3 gap-6 mb-8">
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <div class="card-icon mb-0"><i class="ph ph-users-three"></i></div>
                        <span style="background: var(--primary-light); color: var(--primary); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">En curso</span>
                    </div>
                    <h3>Matemáticas 3ºA</h3>
                    <p class="text-secondary mb-4">10:00 - 11:30 • Aula 12</p>
                    <div class="flex gap-2">
                        <button class="btn btn-primary" style="flex: 1; padding: 6px;"><i class="ph ph-check-square"></i> Asistencia</button>
                        <button class="btn btn-secondary" style="flex: 1; padding: 6px;"><i class="ph ph-folder-open"></i> Material</button>
                    </div>
                </div>
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <div class="card-icon mb-0" style="background: rgba(16, 185, 129, 0.1); color: var(--success);"><i class="ph ph-exam"></i></div>
                    </div>
                    <h3>Evaluaciones</h3>
                    <p class="text-secondary mb-4">25 exámenes de Física por corregir</p>
                    <button class="btn btn-secondary w-full"><i class="ph ph-pencil-simple"></i> Calificar</button>
                </div>
                <div class="card">
                    <div class="flex justify-between items-center mb-4">
                        <div class="card-icon mb-0" style="background: rgba(245, 158, 11, 0.1); color: var(--warning);"><i class="ph ph-chats"></i></div>
                    </div>
                    <h3>Tutorías</h3>
                    <p class="text-secondary mb-4">2 mensajes nuevos de familias</p>
                    <button class="btn btn-secondary w-full"><i class="ph ph-envelope-open"></i> Ver Mensajes</button>
                </div>
            </div>
        </div>
    `,

    familyDashboard: () => `
        <div class="fade-in">
            <div class="dashboard-header">
                <div>
                    <h2>Portal de Familias</h2>
                    <p class="text-secondary">Seguimiento académico de: Carlos Pérez (3º ESO)</p>
                </div>
                <button class="btn btn-secondary" onclick="logout()"><i class="ph ph-sign-out"></i> Cerrar sesión</button>
            </div>
            
            <div class="dashboard-grid">
                <div class="panel">
                    <div class="panel-header">
                        <h3>Comunicados del Centro</h3>
                    </div>
                    <div class="list">
                        <div class="list-item">
                            <div class="list-item-icon" style="color: var(--primary);"><i class="ph ph-megaphone"></i></div>
                            <div class="list-item-content">
                                <h4>Reunión de inicio de curso</h4>
                                <p>Estimadas familias, la reunión general tendrá lugar el próximo...</p>
                            </div>
                            <span style="font-size: 12px; color: var(--text-secondary);">Hace 2 días</span>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon" style="color: var(--warning);"><i class="ph ph-warning-circle"></i></div>
                            <div class="list-item-content">
                                <h4>Aviso de excursión</h4>
                                <p>Recordatorio: Se requiere autorización firmada para la visita al museo.</p>
                            </div>
                            <span style="font-size: 12px; color: var(--text-secondary);">Hace 5 días</span>
                        </div>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-header">
                        <h3>Asistencia Reciente</h3>
                    </div>
                    <div class="flex items-center justify-between p-2" style="border-left: 4px solid var(--success); background: var(--surface-hover); margin-bottom: 8px;">
                        <span>Hoy</span>
                        <span style="color: var(--success); font-weight: bold;">Asiste</span>
                    </div>
                    <div class="flex items-center justify-between p-2" style="border-left: 4px solid var(--success); background: var(--surface-hover); margin-bottom: 8px;">
                        <span>Ayer</span>
                        <span style="color: var(--success); font-weight: bold;">Asiste</span>
                    </div>
                    <button class="btn btn-secondary w-full mt-4">Solicitar Tutoría</button>
                </div>
            </div>
        </div>
    `,

    adminDashboard: () => `
        <div class="fade-in">
            <div class="dashboard-header">
                <div>
                    <h2>Administración del Sistema</h2>
                    <p class="text-secondary">Panel de control general del centro educativo.</p>
                </div>
                <button class="btn btn-secondary" onclick="logout()"><i class="ph ph-sign-out"></i> Cerrar sesión</button>
            </div>

            <div class="dashboard-stats">
                <div class="stat-card">
                    <div class="stat-icon" style="background: rgba(37, 99, 235, 0.1); color: var(--primary);"><i class="ph ph-users"></i></div>
                    <div class="stat-info">
                        <h4>Total Alumnos</h4>
                        <p>1,245</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: rgba(16, 185, 129, 0.1); color: var(--success);"><i class="ph ph-chalkboard-teacher"></i></div>
                    <div class="stat-info">
                        <h4>Profesorado</h4>
                        <p>84</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: rgba(139, 92, 246, 0.1); color: #8b5cf6;"><i class="ph ph-server"></i></div>
                    <div class="stat-info">
                        <h4>Estado Sistema</h4>
                        <p style="color: var(--success); font-size: 16px; margin-top: 5px;">Óptimo 99.9%</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background: rgba(245, 158, 11, 0.1); color: var(--warning);"><i class="ph ph-database"></i></div>
                    <div class="stat-info">
                        <h4>Último Backup</h4>
                        <p style="font-size: 14px; margin-top: 5px;">Hace 2 horas</p>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid">
                <div class="panel">
                    <div class="panel-header">
                        <h3>Matriculaciones por Trimestre (Simulación)</h3>
                    </div>
                    <div class="chart-bar-container">
                        <div class="chart-bar"><div class="chart-bar-fill" style="height: 60%;"></div><div class="chart-label">T1</div></div>
                        <div class="chart-bar"><div class="chart-bar-fill" style="height: 80%;"></div><div class="chart-label">T2</div></div>
                        <div class="chart-bar"><div class="chart-bar-fill" style="height: 40%;"></div><div class="chart-label">T3</div></div>
                        <div class="chart-bar"><div class="chart-bar-fill" style="height: 90%;"></div><div class="chart-label">T4</div></div>
                    </div>
                </div>
                <div class="panel">
                    <div class="panel-header">
                        <h3>Seguridad y Accesos</h3>
                    </div>
                    <div class="list">
                        <div class="list-item">
                            <div class="list-item-icon" style="color: var(--success); background: rgba(16, 185, 129, 0.1);"><i class="ph ph-shield-check"></i></div>
                            <div class="list-item-content">
                                <h4>Firewall Activo</h4>
                                <p>Sin amenazas recientes</p>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon" style="color: var(--primary); background: rgba(37, 99, 235, 0.1);"><i class="ph ph-lock-key"></i></div>
                            <div class="list-item-content">
                                <h4>Encriptación AES-256</h4>
                                <p>Datos de usuarios seguros</p>
                            </div>
                        </div>
                        <button class="btn btn-secondary w-full mt-4"><i class="ph ph-download-simple"></i> Forzar Backup</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    platform: () => `
        <div class="fade-in">
            <h1 class="text-center mb-4">Nuestra Plataforma</h1>
            <p class="text-center text-secondary mb-8 max-w-800 mx-auto">Una solución integral diseñada para potenciar el ecosistema educativo mediante herramientas digitales de vanguardia.</p>
            
            <div class="grid grid-cols-2 gap-8 mb-8 items-center">
                <div>
                    <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=800" alt="Plataforma Educativa" class="img-fluid rounded-lg shadow-lg">
                </div>
                <div>
                    <h2 class="mb-4">Diseño Centrado en el Usuario</h2>
                    <p class="text-secondary mb-4">Colegio Digital ha sido creado pensando en la facilidad de uso. Nuestra interfaz intuitiva permite que alumnos, profesores y familias se adapten en cuestión de minutos.</p>
                    <ul class="list-check">
                        <li><i class="ph ph-check-circle"></i> Interfaz moderna y minimalista</li>
                        <li><i class="ph ph-check-circle"></i> Accesible desde móviles y tablets</li>
                        <li><i class="ph ph-check-circle"></i> Personalización por roles</li>
                    </ul>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-6 mt-8">
                <div class="card">
                    <h3>Para Alumnos</h3>
                    <p class="text-secondary">Acceso a materiales, entrega de tareas y seguimiento de notas en tiempo real.</p>
                </div>
                <div class="card">
                    <h3>Para Profesores</h3>
                    <p class="text-secondary">Gestión de aula simplificada, herramientas de evaluación y comunicación fluida.</p>
                </div>
                <div class="card">
                    <h3>Para Familias</h3>
                    <p class="text-secondary">Información constante sobre el progreso académico y avisos del centro.</p>
                </div>
            </div>
        </div>
    `,

    services: () => `
        <div class="fade-in">
            <h1 class="text-center mb-8">Nuestros Servicios</h1>
            <div class="grid grid-cols-3 gap-6">
                <div class="card text-center">
                    <i class="ph ph-desktop" style="font-size: 48px; color: var(--primary); margin-bottom: 20px;"></i>
                    <h3>Aulas Virtuales</h3>
                    <p class="text-secondary">Entornos virtuales de aprendizaje integrados con videoconferencia.</p>
                </div>
                <div class="card text-center">
                    <i class="ph ph-book-open" style="font-size: 48px; color: var(--primary); margin-bottom: 20px;"></i>
                    <h3>Biblioteca Digital</h3>
                    <p class="text-secondary">Acceso a miles de recursos, libros y artículos académicos.</p>
                </div>
                <div class="card text-center">
                    <i class="ph ph-calendar-check" style="font-size: 48px; color: var(--primary); margin-bottom: 20px;"></i>
                    <h3>Planificación</h3>
                    <p class="text-secondary">Herramientas para organizar el curso escolar de forma eficiente.</p>
                </div>
            </div>
        </div>
    `,

    news: () => `
        <div class="fade-in">
            <h1 class="mb-8">Noticias y Eventos</h1>
            <div class="grid grid-cols-2 gap-6">
                <div class="card overflow-hidden p-0">
                    <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800" alt="Semana de la Ciencia" class="card-img">
                    <div class="p-6">
                        <span style="font-size: 12px; color: var(--primary); font-weight: bold;">EVENTO</span>
                        <h3 class="mt-2">Semana de la Ciencia 2026</h3>
                        <p class="text-secondary mb-4">Descubre los proyectos innovadores de nuestros alumnos de secundaria en la feria anual.</p>
                        <a href="#" class="btn-ghost p-0">Leer más <i class="ph ph-arrow-right"></i></a>
                    </div>
                </div>
                <div class="card overflow-hidden p-0">
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" alt="Instalaciones deportivas" class="card-img">
                    <div class="p-6">
                        <span style="font-size: 12px; color: var(--primary); font-weight: bold;">COMUNICADO</span>
                        <h3 class="mt-2">Nuevas instalaciones deportivas</h3>
                        <p class="text-secondary mb-4">Inauguramos el nuevo pabellón polideportivo cubierto para el próximo trimestre.</p>
                        <a href="#" class="btn-ghost p-0">Leer más <i class="ph ph-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `,

    contact: () => `
        <div class="fade-in">
            <h1 class="text-center mb-8">Contacta con nosotros</h1>
            <div class="dashboard-grid">
                <div class="panel">
                    <h3>Envíanos un mensaje</h3>
                    <form onsubmit="event.preventDefault(); alert('Mensaje enviado');" class="mt-4">
                        <div class="input-group">
                            <label>Nombre completo</label>
                            <div class="input-wrapper">
                                <i class="ph ph-user"></i>
                                <input type="text" placeholder="Tu nombre" required>
                            </div>
                        </div>
                        <div class="input-group">
                            <label>Correo electrónico</label>
                            <div class="input-wrapper">
                                <i class="ph ph-envelope"></i>
                                <input type="email" placeholder="tu@email.com" required>
                            </div>
                        </div>
                        <div class="input-group">
                            <label>Mensaje</label>
                            <div class="input-wrapper">
                                <textarea placeholder="¿En qué podemos ayudarte?" required></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                    </form>
                </div>
                <div class="panel">
                    <h3>Información de Contacto</h3>
                    <div class="list mt-4">
                        <div class="list-item">
                            <div class="list-item-icon"><i class="ph ph-map-pin"></i></div>
                            <div class="list-item-content">
                                <h4>Dirección</h4>
                                <p>Campus de la Innovación, 1. 28000 Madrid</p>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon"><i class="ph ph-phone"></i></div>
                            <div class="list-item-content">
                                <h4>Teléfono</h4>
                                <p>+34 900 123 456</p>
                            </div>
                        </div>
                        <div class="list-item">
                            <div class="list-item-icon"><i class="ph ph-envelope"></i></div>
                            <div class="list-item-content">
                                <h4>Email</h4>
                                <p>info@colegiodigital.edu</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 overflow-hidden rounded-md shadow-inner" style="height: 200px;">
                        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" alt="Mapa" class="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
                    </div>
                </div>
            </div>
            
            <div class="panel mt-8">
                <div class="flex items-center gap-4">
                    <i class="ph ph-lock-key" style="font-size: 32px; color: var(--primary);"></i>
                    <div>
                        <h3>Seguridad y Protección de Datos</h3>
                        <p class="text-secondary">Colegio Digital cumple estrictamente con el RGPD. Todos los datos de alumnos, familias y profesorado están encriptados y alojados en servidores seguros con copias de seguridad diarias. No compartimos información con terceros bajo ninguna circunstancia.</p>
                    </div>
                </div>
            </div>
        </div>
    `
};
