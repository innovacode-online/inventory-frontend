import { Routes, Route } from 'react-router-dom';

import { AuthNavigation } from './auth/AuthNavigation';
import { DashboardNavigation } from './dashboard/DashboardNavigation';

export const Navigation = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={ <AuthNavigation/> }/>
            <Route path='/*' element={ <DashboardNavigation/> }/>
        </Routes>
    )
}
