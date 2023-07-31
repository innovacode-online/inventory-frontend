import { ReactNode, useState } from 'react';
import { ToastContext } from './ToastContext';


export const ToastProvider = ({ children }:{ children:  ReactNode}) => {
    const [right, setRight] = useState('-100rem');
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'success'|'error'>('error')

    const showToast = ( type: 'success'|'error', message: string ) => {
        setMessage( message );
        setType( type );
        setRight('1rem');


        setTimeout(() => {
            setRight('-100rem')
        },5000)
    }


    return (
        <ToastContext.Provider
            value={{
                right,
                message,
                type,
                showToast
            }}
        >
            { children }
        </ToastContext.Provider>
    )
}