import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from '../context';
import { LoadingView } from '../components';
import { AuthNavigation } from './auth/AuthNavigation';
import { DashboardNavigation } from './dashboard/DashboardNavigation';

export const Navigation = () => {

    const { status } = useContext( AuthContext );

    if( status == 'ckecking' ){
        return <LoadingView/>
    }


    return (
        <Routes>
            <Route path='/auth/*' element={ <AuthNavigation/> }/>
            <Route path='/*' element={ <DashboardNavigation/> }/>
        </Routes>
    )
}
