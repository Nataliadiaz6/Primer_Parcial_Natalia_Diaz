import type { IUser } from "../types/IUser";
import type { CartItem } from "../types/cartItem";

// SESIÓN
// Guardamos usuario logueado
export const saveUserSession = (user: IUser) => {
    localStorage.setItem("userData", JSON.stringify(user));
};

// Obtenemos usuario logueado
export const getUserSession = (): IUser | null => {
    const user = localStorage.getItem("userData");

    return user ? JSON.parse(user) : null;
};

// Cerramos sesión
export const removeUserSession = () => {
    localStorage.removeItem("userData");
};

// USUARIOS
// Obtener todos los usuarios
export const getAllUsers = (): IUser[] => {
    return JSON.parse(localStorage.getItem("users") || "[]");
};

// Guardar nuevo usuario
export const saveNewUser = (user: IUser) => {
    const users = getAllUsers();

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
};

// CARRITO
// Obtener carrito
export const getCart = (): CartItem[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
};

// Guardar carrito
export const saveCart = (cart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Vaciar carrito
export const clearCart = () => {
    localStorage.removeItem("cart");
};