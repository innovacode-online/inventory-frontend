import { ReactNode, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import inventoryDb from '../../api/inventoryDb';
import { Sale } from '../../interfaces/sales/sale';
import { SalesResponse } from '../../interfaces/sales/sales-response';

import { ToastContext } from '..';
import { SaleContext } from './SaleContext';


export const SaleProvider = ({ children }:{ children:  ReactNode}) => {

    const { showToast } = useContext(ToastContext);
    // const navigate = useNavigate();

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

    useEffect(() => {
      
        getAllSales();
    }, [])
    



    return (
        <SaleContext.Provider
            value={{    
                sales, 
                isLoading, 

                getAllSales
            }}
        >
            { children }
        </SaleContext.Provider>
    )
}