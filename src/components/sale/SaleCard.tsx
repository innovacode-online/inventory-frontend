import { FC } from 'react';
import { Sale } from '../../interfaces/sales/sale';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Card, Grid, Typography, Box, IconButton } from '@mui/material';

interface Props{
    sale: Sale
}

export const SaleCard:FC<Props> = ({ sale }) => {
    return (
        <Card sx={{ mb: 3, padding:'2rem' }}>
            <Grid container spacing={ 3 }>
                <Grid item xs={ 12 } md={ 3 }>
                    <Typography color='info.contrastText'>Venta: #200</Typography>
                    <Typography>{ sale.id }</Typography>
                </Grid>
                <Grid item xs={ 12 } md={ 3 }>
                    <Typography color='info.contrastText'>Cantidad productos:</Typography>
                    <Typography>{ sale.details.length }</Typography>
                </Grid>
                {/* <Grid item xs={ 12 } md={ 3 }>
                    <Typography color='info.contrastText'>Fecha de creacion:</Typography>
                    <Typography>{ formatDate( category.created_at ) }</Typography>
                </Grid> */}
                <Grid item xs={ 12 } md={ 3 }>
                    <Typography color='info.contrastText'>Acciones:</Typography>
                    <Box>
                        <IconButton color='secondary'>
                            <AiOutlineEdit/>
                        </IconButton>
                        <IconButton
                            // onClick={() => deleteCategory(category.id)}
                        >
                            <AiOutlineDelete/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Card> 
    )
}
