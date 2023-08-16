import { createContext } from 'react'
import { Sale } from '../../interfaces/sales/sale';
import { Product } from '../../interfaces/product';
import { Cart } from '../../interfaces/cart';

interface ContextProps {
    cart: Cart[];
    sales: Sale[];
    isLoading: boolean;
    total: number;
    
    getAllSales: () => Promise<void>;
    addProductCart: (product: Product) => void;
    amountModify: (product: Product, value: string) => void
    calculateTotalPrice: () => void;
    createNewSale: (client: string) => Promise<void>
}

export const SaleContext = createContext( {} as ContextProps );