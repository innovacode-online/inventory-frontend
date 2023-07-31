import { createContext } from 'react'
import { Category } from '../../interfaces/category';

interface ContextProps {
    categories: Category[];
    isLoading: boolean;

    getAllCategories: () => Promise<void>;
    createNewCategory: (name: string) => Promise<void>;
    deleteCategory: (id: number) => Promise<void>;
}

export const CategoriesContext = createContext( {} as ContextProps );