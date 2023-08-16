import { ReactNode, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import inventoryDb from '../../api/inventoryDb';
import { Sale } from '../../interfaces/sales/sale';
import { SalesResponse } from '../../interfaces/sales/sales-response';

import { ToastContext } from '..';
import { SaleContext } from './SaleContext';
import { Cart } from '../../interfaces/cart';
import { Product } from '../../interfaces/product';


export const SaleProvider = ({ children }:{ children:  ReactNode}) => {

    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();

    const [cart, setCart] = useState<Cart[]>([])
    const [total, setTotal] = useState(0)
    const [sales, setSales] = useState([] as Sale[]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({ hasError: false, message:'' });


    const getAllSales = async (): Promise<void> => {
        setIsLoading(true)
        try {
            const { data: { data } } = await inventoryDb.get<SalesResponse>('/sales');
            setSales( data )
            setIsLoading( false )
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


    const addProductCart = (product: Product) => {
        const cartValidate = cart.findIndex( item => item.product.id === product.id );

        if( cartValidate != -1 ){
            alert('El producto ya se encuentra en el carrito');
            return;
        }

        setCart([...cart, { product, amount: 1 }])


    }

    const amountModify = (product: Product, value: string) => {
        if( +value > product.stock || +value < 1 ){
            return;
        }

        const cartUpdate = cart.map((item) => item.product.id === product.id ? { ...item, amount: +value } : item);
        setCart( cartUpdate );
    }

    const calculateTotalPrice = () => {
        let totalAux = 0;
        cart.map(( item )=> { 
            totalAux += item.product.price * item.amount
        })
        setTotal( totalAux );
    } 

    const createNewSale = async (client: string): Promise<void> => {
        try {
            setIsLoading(true);
            const newSale = {
                client,
                total,
                products: cart.map(productCart => {
                    return {
                        id: productCart.product.id,
                        amount: productCart.amount,
                    }
                })
            }
        
            // ENVIO A LA BD
            await inventoryDb.post('/sales', newSale);
            showToast('success', 'Venta realizada con exito');
            setIsLoading( false )

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
            getAllSales();
            navigate('/sales')
        }
    }


    useEffect(() => {
        getAllSales();
    }, [])
    
    useEffect(() => {
        calculateTotalPrice();
    }, [cart])
    



    return (
        <SaleContext.Provider
            value={{    
                cart,
                sales, 
                isLoading, 

                getAllSales,
                addProductCart,
                amountModify,
                total,
                calculateTotalPrice,
                createNewSale
            }}
        >
            { children }
        </SaleContext.Provider>
    )
}