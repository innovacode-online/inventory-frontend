import { createContext } from 'react'
import { Product } from '../../interfaces/product';

interface ContextProps {
    products: Product[];
    product: Product;
    isLoading: boolean;


    createNewProduct: (image: any, product: {
        name: string;
        description: string;
        stock: number;
        category_id: string;
        price: string;
    }) => Promise<void>;
    
    deleteProductById: (id: number) => Promise<void>;
    getProductBySlug: (slug: string) => Promise<void>;
    editProduct: (image: any, id: number, product: {
        name: string;
        description: string;
        stock: number;
        category_id: number;
        price: number;
    }) => Promise<void>

}

export const ProductsContext = createContext( {} as ContextProps );