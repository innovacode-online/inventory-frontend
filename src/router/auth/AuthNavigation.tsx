import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../../pages/auth/LoginPage"
import { useContext } from 'react';
import { AuthContext } from "../../context";


export const AuthNavigation = () => {

    const { status } = useContext( AuthContext );

    return ( status === 'not-authenticated' )
    ? (
        <Routes>
            <Route path="login" element={ <LoginPage/> }/>
        </Routes>
    )
    : (
        <Navigate to='/'/>
    )
}