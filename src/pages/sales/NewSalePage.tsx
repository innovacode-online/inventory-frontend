import { Grid, Typography } from '@mui/material';
import { NewSaleForm, ProductsSaleList } from '../../components';

export const NewSalePage = () => {
    return (
        <Grid
            container
            spacing={ 2 }
            sx={{
                backgroundColor: 'info.main',
                margin:'auto',
                borderRadius: '10px',
                alignItems: 'center',
                padding: '3rem 2rem'
            }}
        >

            <Grid item xs={ 12 } md={ 5 }>
                {/* PRODUCTOS */}
                <Typography variant='h2' mb={ 5 }>Productos disponibles</Typography>
                <ProductsSaleList/>
            </Grid>
            
            <Grid item xs={ 12 } md={ 7 }>
                {/* CARRITO */}
                <Typography variant='h2' mb={ 5 }>Detalles de la venta</Typography>
                <NewSaleForm/>
            </Grid>
        </Grid>
    )
}
