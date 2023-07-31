import { Routes, Route, Navigate } from 'react-router-dom';
import { CategoriesPage, NewCategoryPage, ProductsPage } from '../../pages';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import { AdminLayout } from '../../layouts';

export const DashboardNavigation = () => {

    const { status } = useContext( AuthContext );


    return ( status === 'authenticated' )
    ? (
        <Routes>
            <Route element={ <AdminLayout/> }>
                <Route index element={ <ProductsPage/> }/>
                <Route path='/products' element={ <ProductsPage/> }/>
                <Route path='/categories' element={ <CategoriesPage/> }/>
                <Route path='/categories/new' element={ <NewCategoryPage/> }/>
            </Route>
        </Routes>
    )
    : <Navigate to='/auth/login' />
    
    
        
}
