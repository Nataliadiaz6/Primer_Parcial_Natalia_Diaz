import type { IUser } from "../../../types/IUser";
import { Rol } from "../../../types/rol";
import { getAllUsers, saveUserSession } from "../../../utils/localStorage";
import { navigate, ROUTES } from "../../../utils/navigate";

// 1. Seleccionamos el formulario con el tipo específico
const form = document.querySelector<HTMLFormElement>("#loginForm");

if (form) {
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    // 2. Captura de datos con FormData
    const data = new FormData(form);
    const email = data.get("email") as string; // Type Assertion 
    const password = data.get("password") as string;

    // 3. Validación de campos vacíos
    if (!email || !password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // 4. Uso de la utilidad para obtener la "base de datos" de usuarios
    const users: IUser[] = getAllUsers();

    // 5. Búsqueda de coincidencia (Login real) 
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      alert("Email o contraseña incorrectos");
      return;
    }

    // 6. Inicio de sesión: Guardamos en 'userData' usando la utilidad 
    saveUserSession(user);

    // 7. Redirección inteligente basada en el ROL 
    if (user.rol === Rol.ADMIN) {
      navigate(ROUTES.ADMIN_HOME);
    } else {
      navigate(ROUTES.CLIENT_HOME);
    }
  });
}