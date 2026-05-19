// Función reutilizable para navegar
export const navigate = (path: string) => {
    window.location.href = path;
};

// Todas las rutas centralizadas
export const ROUTES = {
    LOGIN: "/src/pages/auth/login/login.html",
    REGISTRO: "/src/pages/auth/registro/registro.html",

    CLIENT_HOME: "/src/pages/client/home/home.html",
    ADMIN_HOME: "/src/pages/admin/home/home.html",

    // Nueva ruta del carrito
    CART: "/src/pages/client/cart/cart.html"
};