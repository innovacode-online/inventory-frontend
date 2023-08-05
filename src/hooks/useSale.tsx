import { useContext } from 'react';
import { SaleContext } from '../context/sales/SaleContext';

export const useSale = () => {
    return useContext( SaleContext );
}
