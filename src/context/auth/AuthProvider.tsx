import { FC, useState, useReducer, useEffect } from 'react';
import  {AuthContext} from './AuthContext';
import { AuthState, authReducer } from './authReducer';
import inventoryDb from '../../api/inventoryDb';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const AuthProvider:FC<PropsProvider> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({ hasError: false, message:'' });

    const navigate = useNavigate();


    const AUTH_INITIAL_STATE: AuthState = {
        status:'ckecking',
        user: null,
        token: null
    }

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);


    const checkToken = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        if( !token ){
            dispatch({ type:'Logout' })
            return;
        }

        try {
            const { data } = await inventoryDb.get('/user');
            dispatch({ type:'Login', payload:{ user: data, token } })

        } catch (error) {
            if( axios.isAxiosError(error) ){
                setIsError({
                    hasError: true,
                    message: error.response?.data.message
                })
            }
            dispatch({ type:'Logout' })
        } finally {
            setIsLoading( false )
        }

    }

    useEffect(() => {
        checkToken();
    }, [])
    

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

    const authLogout = async () => {
        // const token = localStorage.getItem('AUTH_TOKEN');
        await inventoryDb.post('/auth/logout', null, {
            headers: {
                Authorization: `Bearer ${ localStorage.getItem('AUTH_TOKEN') }`
            }
        });
        
        localStorage.removeItem('AUTH_TOKEN');
        dispatch({ type:'Logout' });
        navigate('/auth/login');

        
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            isError,
            isLoading,

            // METHODS
            authLogin,
            authLogout
        }}>
            { children }
        </AuthContext.Provider>
    )
}