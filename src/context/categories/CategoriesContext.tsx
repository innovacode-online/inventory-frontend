import { createContext } from 'react'
import { Category } from '../../interfaces/category';

interface ContextProps {
    categories: Category[];
    isLoading: boolean;

    getAllCategories: () => Promise<void>
}

export const CategoriesContext = createContext( {} as ContextProps );