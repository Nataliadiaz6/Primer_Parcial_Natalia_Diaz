import type { Product } from "./product";

// Cada elemento del carrito tendrá:
// - el producto
// - la cantidad
export interface CartItem {
    product: Product;
    quantity: number;
}