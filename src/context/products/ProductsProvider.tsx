import { ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import inventoryDb from '../../api/inventoryDb';
import { ProductsContext } from './ProductsContext';
import { ToastContext } from '..';
import { Product } from '../../interfaces/product';


export const ProductsProvider = ({ children }:{ children:  ReactNode}) => {

    const navigate = useNavigate();
    const { showToast } = useContext(ToastContext);

    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({} as Product);
    const [isError, setIsError] = useState({ hasError: false, message:'' });

    const getAllProducts = async ( ) => {
        setIsLoading( true );

        try {
            const { data: { data } } = await inventoryDb.get('/products');
            setProducts( data );
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
        getAllProducts();
    }, [])


    const createNewProduct = async (image: any, product: { name:string, description:string, stock: number, category_id:string, price:string}): Promise<void> => {
        //? UPLOAD IMAGE
        try {
            const formData = new FormData();
            formData.append('image', image);
    
            const { data: imageUrl } = await inventoryDb.post('/upload', formData);
            
    
            // ? SAVE PPRODUCT
            await inventoryDb.post('/products', { ...product, image: imageUrl });
            showToast('success', 'Se creo el producto')
            getAllProducts();
            navigate('/products');
            
        } catch (error) {
            if( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
            }
            showToast('error', isError.message)
        } finally {
            setIsLoading( false )
        }
    }


    const deleteProductById = async (id:number) => {
        try {
            await inventoryDb.delete(`/products/${id}`);
            showToast('success','Producto eliminado');
            getAllProducts();
        } catch (error) {
            if( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
            }
            showToast('error', isError.message)
        }
    }

    const getProductBySlug = async (slug: string) => {
        setIsLoading( true );

        try {
            const { data: { data } } = await inventoryDb.get(`/products/${ slug }`);
            setProduct( data as Product );
            setIsLoading( false );

        } catch (error) {
            if( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
            }
            showToast('error', isError.message)
        } finally {
            setIsLoading( false )
        }
    }



    const editProduct = async ( id: number, image: any, product: { name:string, description:string, stock: number, category_id:number, price:number}): Promise<void> => {
        //? UPLOAD IMAGE
        try {
            if( image ){
                const formData = new FormData();
                formData.append('image', image);
        
                const { data: imageUrl } = await inventoryDb.post('/upload', formData);
                await inventoryDb.put(`/products/${ id }`, { ...product, image: imageUrl });
                showToast('success', 'Se actualizo el producto')
                getAllProducts();
                navigate('/products');
                return;

            }
            
            // ? SAVE PPRODUCT
            await inventoryDb.put(`/products/${ id }`, { ...product });
            showToast('success', 'Se actualizo el producto')
            getAllProducts();
            navigate('/products');
    
            
        } catch (error) {
            if( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
            }
            showToast('error', isError.message)
        } finally {
            setIsLoading( false )
        }
    }


    return (
        <ProductsContext.Provider
            value={{
                isLoading,
                products,
                product,

                createNewProduct,
                deleteProductById,
                getProductBySlug,
                editProduct
            }}
        >
            { children }
        </ProductsContext.Provider>
    )
}