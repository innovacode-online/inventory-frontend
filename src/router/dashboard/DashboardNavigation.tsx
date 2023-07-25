import { Routes, Route } from 'react-router-dom';
import { CategoriesPage, ProductsPage } from '../../pages';

export const DashboardNavigation = () => {
    return (
        
        <Routes>
            <Route index element={ <ProductsPage/> }/>
            <Route path='/products' element={ <ProductsPage/> }/>
            <Route path='/categories' element={ <CategoriesPage/> }/>
        </Routes>
    )
}
