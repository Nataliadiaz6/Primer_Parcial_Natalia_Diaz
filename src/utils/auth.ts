// Importamos utilidades
import { removeUserSession } from "./localStorage";
import { navigate, ROUTES } from "./navigate";

// Función reutilizable para logout
export function logout() {

    // Eliminar sesión
    removeUserSession();

    // Redirigir al login
    navigate(ROUTES.LOGIN);
}