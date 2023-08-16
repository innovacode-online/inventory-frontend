import { useContext } from 'react';
import { ProductsContext } from '../context';

export const useProducts = () => {
    return useContext( ProductsContext );
}
