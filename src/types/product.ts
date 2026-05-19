import type { ICategory } from "./category";
 // Interface principal de productos
export interface Product {
    id: number;
    eliminado: boolean;
    createdAt: string;
    nombre: string;
    precio: number;
    descripcion: string;
    stock: number;
    imagen: string;
    disponible: boolean;

    // Un producto puede tener varias categorías
    categorias: ICategory[];
}
