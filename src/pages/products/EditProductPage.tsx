import { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context";

import { EditProductForm, LoadingView } from '../../components';
import { Typography } from '@mui/material';

export const EditProductPage = () => {
    const { product, getProductBySlug, isLoading } = useContext(ProductsContext)
    const { slug } = useParams();

    useEffect(() => {
      getProductBySlug( slug! );

    }, [])
    


    if( isLoading ){
        return <LoadingView/>
    } 

    return (
        <>
            <Typography variant='h1'>Editar { product.name }</Typography>
            <EditProductForm product={ product }/>
        </>
    )
}
