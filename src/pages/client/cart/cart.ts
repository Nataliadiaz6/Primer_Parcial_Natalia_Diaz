import {
    getCart,
    saveCart,
    clearCart
} from "../../../utils/localStorage";

import type { CartItem } from "../../../types/cartItem";

// Contenedor principal
const container = document.getElementById("cart-container") as HTMLDivElement;

// Total
const totalElement = document.getElementById("cart-total") as HTMLHeadingElement;

// Botón vaciar
const clearButton = document.getElementById("clear-cart") as HTMLButtonElement;

// RENDER CARRITO
function renderCart() {

    // Obtener carrito
    const cart: CartItem[] = getCart();

    // Limpiar contenido
    container.innerHTML = "";

    // Si no hay productos
    if (cart.length === 0) {

        container.innerHTML = "<p>El carrito está vacío</p>";

        totalElement.textContent = "Total: $0";

        return;
    }

    // Variable total
    let total = 0;

    // Recorrer carrito
    cart.forEach(item => {

        const subtotal = item.product.precio * item.quantity;

        total += subtotal;

        container.innerHTML += `
            <div class="cart-item">

                <h3>${item.product.nombre}</h3>

                <p>Cantidad: ${item.quantity}</p>

                <p>Precio: $${item.product.precio}</p>

                <p>Subtotal: $${subtotal}</p>

                <button class="delete-btn" data-id="${item.product.id}">
                    Eliminar
                </button>
            </div>
        `;
    });

    // Mostrar total
    totalElement.textContent = `Total: $${total}`;

    // Botones eliminar
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.getAttribute("data-id"));

            deleteProduct(id);
        });
    });
}

// ELIMINAR PRODUCTO
function deleteProduct(id: number) {

    const cart = getCart();

    const updatedCart = cart.filter(item => item.product.id !== id);

    saveCart(updatedCart);

    renderCart();
}

// VACIAR CARRITO
clearButton?.addEventListener("click", () => {

    clearCart();

    renderCart();
});

// Render inicial
renderCart();