import { createContext } from 'react'
import { Product } from '../../interfaces/product';

interface ContextProps {
    products: Product[];
    isLoading: boolean;


    createNewProduct: (image: any, product: {
        name: string;
        description: string;
        stock: number;
        category_id: string;
        price: string;
    }) => Promise<void>

}

export const ProductsContext = createContext( {} as ContextProps );