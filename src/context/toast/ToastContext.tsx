import { createContext } from 'react'

interface ContextProps {
    right: string;
    message: string;
    type: 'success' | 'error',

    showToast: ( type: 'success'|'error', message: string ) => void
}

export const ToastContext = createContext( {} as ContextProps );