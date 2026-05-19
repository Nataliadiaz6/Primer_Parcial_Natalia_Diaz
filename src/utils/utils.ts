import { removeUserSession } from "./localStorage"; // Importamos tu utilidad
import { navigate, ROUTES } from "./navigate";      // Importamos la navegación

// Función para cerrar sesión
export function logout() {
    // 1. Borramos los datos del usuario logueado usando la utilidad
    removeUserSession(); 

    // 2. Redirigimos al login de forma prolija
    navigate(ROUTES.LOGIN); 
}