import { logout } from "../../../utils/auth";

// Seleccionamos el botón de cerrar sesión
const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;

// Agregamos el evento de escucha
if (buttonLogout) {
    buttonLogout.addEventListener("click", () => {
        logout(); // Ejecuta la limpieza de localStorage y redirección [cite: 393]
    });
}