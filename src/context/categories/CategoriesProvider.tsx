import { FC, useState, useEffect } from 'react';
import { CategoriesContext } from './CategoriesContext';
import inventoryDb from '../../api/inventoryDb';
import axios from 'axios';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const CategoriesProvider:FC<PropsProvider> = ({ children }) => {

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
    

    return (
        <CategoriesContext.Provider 
            value={{
                categories,
                isLoading,

                // METHODS
                getAllCategories,
            }}
        >
            { children }
        </CategoriesContext.Provider>
    )
}