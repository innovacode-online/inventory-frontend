import { Routes, Route, Navigate } from 'react-router-dom';
import { CategoriesPage, EditProductPage, NewCategoryPage, NewProductPage, ProductsPage, SalesPage } from '../../pages';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import { AdminLayout } from '../../layouts';

export const DashboardNavigation = () => {

    const { status } = useContext( AuthContext );


    return ( status === 'authenticated' )
    ? (
        <Routes>
            <Route element={ <AdminLayout/> }>
                {/* PRODUCTS */}
                <Route index element={ <ProductsPage/> }/>
                <Route path='/products' element={ <ProductsPage/> }/>
                <Route path='/products/new' element={ <NewProductPage/> }/>
                <Route path='/products/edit/:slug' element={ <EditProductPage/> }/>

                {/* CATEGORIES */}
                <Route path='/categories' element={ <CategoriesPage/> }/>
                <Route path='/categories/new' element={ <NewCategoryPage/> }/>
                
                {/* SALES */}
                <Route path='/sales' element={ <SalesPage/> }/>

            </Route>
        </Routes>
    )
    : <Navigate to='/auth/login' />
    
    
        
}
