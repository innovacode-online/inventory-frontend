import { FC, useState, useEffect, useContext } from 'react';
import { CategoriesContext } from './CategoriesContext';
import inventoryDb from '../../api/inventoryDb';
import axios from 'axios';
import { ToastContext } from '..';
import { useNavigate } from 'react-router-dom';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const CategoriesProvider:FC<PropsProvider> = ({ children }) => {

    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({ hasError: false, message:'' });


    const getAllCategories = async ( ) => {
        setIsLoading( true );

        try {
            const { data } = await inventoryDb.get('/categories');
            setCategories( data );
            setIsLoading( false );

        } catch (error) {
            if( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
            }
            console.log(isError);
        } finally {
            setIsLoading( false )
        }
    }

    useEffect(() => {
        getAllCategories();
    }, [])
    

    const createNewCategory = async (name: string) => {
        try {
            setIsLoading(true)
            const { data } = await inventoryDb.post('/categories', { name });
            showToast('success', data.message)

            setIsLoading(false)

            getAllCategories();
            navigate('/categories')
        

        } catch (error) {
            if( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
            }
            console.log(error);
            showToast('error', isError.message)
        } finally {
            setIsLoading( false )
        }

    }

    const deleteCategory = async (id:number) => {
        try {
            const { data } = await inventoryDb.delete(`/categories/${ id }`);
            showToast('success', data.message);
            getAllCategories();

        } catch (error) {
            if( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
            }
            console.log(error);
            showToast('error', isError.message)
        }
    }

    return (
        <CategoriesContext.Provider 
            value={{
                categories,
                isLoading,

                // METHODS
                getAllCategories,
                createNewCategory,
                deleteCategory
            }}
        >
            { children }
        </CategoriesContext.Provider>
    )
}