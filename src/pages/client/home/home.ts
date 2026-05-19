import { logout } from "../../../utils/auth";
import { PRODUCTS, getCategories } from "../../../utils/data";
import { getUserSession } from "../../../utils/localStorage";
import { Rol } from "../../../types/rol";

import type { Product } from "../../../types/product";
import type { CartItem } from "../../../types/cartItem";

import {
    getCart,
    saveCart
} from "../../../utils/localStorage";

import { navigate, ROUTES } from "../../../utils/navigate";

// LOGOUT
const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;

buttonLogout?.addEventListener("click", logout);

// BOTÓN CARRITO
const buttonCart = document.getElementById("cartButton") as HTMLButtonElement;

buttonCart?.addEventListener("click", () => {
    navigate(ROUTES.CART);
});
// Obtener usuario logueado
const user = getUserSession();

// Obtener link admin
const adminLink = document.getElementById("adminLink");

// Si NO es admin ocultamos el link
if (user?.rol !== Rol.ADMIN) {
    adminLink?.remove();
}

// ELEMENTOS DOM
const contenedorProductos = document.querySelector<HTMLDivElement>("#contenedor-productos");

const listaCategorias = document.querySelector<HTMLUListElement>("#lista-categorias");

const inputBusqueda = document.querySelector<HTMLInputElement>("#inputBusqueda");

// RENDER PRODUCTOS
const renderProductos = (listado: Product[]) => {

    if (!contenedorProductos) return;

    // Limpiar contenido anterior
    contenedorProductos.innerHTML = "";

    // Mostrar solo productos no eliminados
    const productosVisibles = listado.filter(p => !p.eliminado);

    // Si no hay resultados
    if (productosVisibles.length === 0) {
        contenedorProductos.innerHTML = "<p>No se encontraron productos</p>";
        return;
    }

    // Recorrer productos
    productosVisibles.forEach(p => {

        contenedorProductos.innerHTML += `
            <div class="producto">
                <img src="/assets/${p.imagen}" alt="${p.nombre}" />

                <h3>${p.nombre}</h3>

                <p>${p.descripcion}</p>

                <span>$${p.precio}</span>

                <button 
                  class="btn-comprar" 
                  data-id="${p.id}"
                  ${!p.disponible ? "disabled" : ""}
                >
                  ${p.disponible ? "Comprar" : "Sin stock"}
                </button>
            </div>
        `;
    });

    // Obtener botones comprar
    const botonesComprar = document.querySelectorAll(".btn-comprar");

    botonesComprar.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.getAttribute("data-id"));

            const product = PRODUCTS.find(p => p.id === id);

            if (!product) return;

            addToCart(product);
        });
    });
};

// AGREGAR AL CARRITO
function addToCart(product: Product) {

    if (!product.disponible || product.stock <= 0) {
      alert("Producto sin stock");
      return;
    }
    // Obtener carrito actual
    const cart = getCart();

    // Buscar si ya existe
    const existingProduct = cart.find(
        item => item.product.id === product.id
    );

    // Si ya existe sumamos cantidad
    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        // Crear nuevo item
        const newItem: CartItem = {
            product,
            quantity: 1
        };

        cart.push(newItem);
    }

    // Guardar carrito actualizado
    saveCart(cart);

    alert("Producto agregado al carrito");
}

// BUSCADOR
inputBusqueda?.addEventListener("input", () => {

    const termino = inputBusqueda.value.toLowerCase();

    const filtrados = PRODUCTS.filter(p =>
        p.nombre.toLowerCase().includes(termino)
    );

    renderProductos(filtrados);
});

// FILTRO POR CATEGORÍA
if (listaCategorias) {

    // Botón todas
    const liTodas = document.createElement("li");

    liTodas.textContent = "Todas";

    liTodas.addEventListener("click", () => {
        renderProductos(PRODUCTS);
    });

    listaCategorias.appendChild(liTodas);

    // Obtener categorías
    const categorias = getCategories();

    categorias.forEach(c => {

        const li = document.createElement("li");

        li.textContent = c.nombre;

        // Filtrar productos
        li.addEventListener("click", () => {

            const filtrados = PRODUCTS.filter(product =>
                product.categorias.some(cat => cat.id === c.id)
            );

            renderProductos(filtrados);
        });

        listaCategorias.appendChild(li);
    });
}

// RENDER INICIAL
renderProductos(PRODUCTS);