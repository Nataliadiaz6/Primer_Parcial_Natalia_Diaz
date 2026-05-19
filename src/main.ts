import type { IUser } from "./types/IUser";
import { Rol } from "./types/rol";
import { getUserSession } from "./utils/localStorage";
import { navigate, ROUTES } from "./utils/navigate";

function checkAuth() {
    // 1. Usamos nuestra utilidad para obtener la sesión
    const user: IUser | null = getUserSession();
    
    // 2. Obtenemos la ruta actual
    const path = window.location.pathname;

    // --- ESCENARIO 1: Usuario NO logueado ---
    // Si no hay sesión y no está en una página de autenticación, va al Login
    const isAuthPage = path.includes("login.html") || path.includes("registro.html");
    
    if (!user && !isAuthPage) {
        navigate(ROUTES.LOGIN);
        return;
    }

    // --- ESCENARIO 2: Usuario logueado ---
    if (user) {
        // Si ya está logueado e intenta ir al Login o Registro, lo mandamos a su Home
        if (isAuthPage) {
            user.rol === Rol.ADMIN ? navigate(ROUTES.ADMIN_HOME) : navigate(ROUTES.CLIENT_HOME);
            return;
        }

        // Bloqueo de ADMIN: Si es CLIENTE e intenta entrar a carpetas de /admin/
        if (path.includes("/admin/") && user.rol !== Rol.ADMIN) {
            console.warn("Acceso denegado: Se requiere rol de Administrador");
            navigate(ROUTES.CLIENT_HOME);
            return;
        }

        // Si es admin y entra a páginas client
        if (path.includes("/client/") && user.rol === Rol.ADMIN && !path.includes("/client/cart/")
            ) {
                 navigate(ROUTES.ADMIN_HOME);
            }
      }
}

// Ejecutamos la validación inmediatamente al cargar el script
checkAuth();