import { FC, useState, useReducer } from 'react';
import  {AuthContext} from './AuthContext';
import { AuthState, authReducer } from './authReducer';
import inventoryDb from '../../api/inventoryDb';
import axios from 'axios';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const AuthProvider:FC<PropsProvider> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({ hasError: false, message:'' });


    const AUTH_INITIAL_STATE: AuthState = {
        status:'ckecking',
        user: null,
        token: null
    }

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const authLogin = async (email: string, password: string ) => {
        
        setIsLoading( true )
        
        try {
            const { data } = await inventoryDb.post('/auth/login', { email, password });
            const { user, token } = data;

            dispatch({type:'Login', payload: { user, token }});
            localStorage.setItem('AUTH_TOKEN', token);

            setIsError({
                hasError: false,
                message: ''
            })

            console.log(data);
            setIsLoading( false )
        
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

    return (
        <AuthContext.Provider value={{
            ...state,
            isError,
            isLoading,

            // METHODS
            authLogin
        }}>
            { children }
        </AuthContext.Provider>
    )
}