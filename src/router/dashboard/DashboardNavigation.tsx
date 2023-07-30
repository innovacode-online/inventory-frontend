import { Routes, Route, Navigate } from 'react-router-dom';
import { CategoriesPage, ProductsPage } from '../../pages';
import { useContext } from 'react';
import { AuthContext } from '../../context';

export const DashboardNavigation = () => {

    const { status } = useContext( AuthContext );


    return ( status === 'authenticated' )
    ? (
        <Routes>
            <Route index element={ <ProductsPage/> }/>
            <Route path='/products' element={ <ProductsPage/> }/>
            <Route path='/categories' element={ <CategoriesPage/> }/>
        </Routes>
    )
    : <Navigate to='/auth/login' />
    
    
        
}
