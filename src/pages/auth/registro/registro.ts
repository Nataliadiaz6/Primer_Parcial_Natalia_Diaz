import type { IUser } from "../../../types/IUser";
import { Rol } from "../../../types/rol";
import { getAllUsers, saveNewUser } from "../../../utils/localStorage";
import { navigate, ROUTES } from "../../../utils/navigate";

// Seleccionamos el formulario con su tipo específico 
const form = document.querySelector<HTMLFormElement>("#registroForm");

if (form) {
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    // Capturamos los datos usando FormData 
    const data = new FormData(form);
    const email = data.get("email") as string; // Aserción de tipo para evitar 'any' 
    const password = data.get("password") as string;

    // Validación de campos vacíos 
    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    // Obtenemos los usuarios registrados usando nuestra utilidad 
    const users = getAllUsers();

    // Verificamos si el email ya existe en la "base de datos" 
    const exists = users.some((u) => u.email === email);

    if (exists) {
      alert("El usuario ya existe");
      return;
    }

    // Creamos el nuevo objeto de usuario con el rol CLIENT por defecto 
    const newUser: IUser = {
      email,
      password,
      rol: Rol.CLIENT,
    };

    // Guardamos el nuevo usuario en el array de localStorage 
    saveNewUser(newUser);

    alert("Usuario registrado correctamente");
    
    // Redirigimos al login usando nuestra utilidad de navegación 
    navigate(ROUTES.LOGIN);
  });
}