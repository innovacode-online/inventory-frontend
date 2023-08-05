import { createContext } from 'react'
import { Sale } from '../../interfaces/sales/sale';

interface ContextProps {
    sales: Sale[];
    isLoading: boolean;

    getAllSales: () => Promise<void>;

}

export const SaleContext = createContext( {} as ContextProps );