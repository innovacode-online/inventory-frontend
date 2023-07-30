import { createContext } from 'react'

interface ContextProps {

    status: 'ckecking' | 'authenticated' | 'not-authenticated',

    isLoading: boolean;
    isError: { hasError: boolean, message: string, };

    authLogin: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext( {} as ContextProps );