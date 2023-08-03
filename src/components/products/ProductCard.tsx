import { FC } from 'react';

import { Card, Grid, Box, Typography, IconButton } from '@mui/material';
import { Product } from '../../interfaces/product';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

interface Props{
    product: Product;
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Card sx={{ mb:3, padding:'2rem' }}>
            <Grid container>
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Box
                        component='img'
                        src={`${ import.meta.env.VITE_API_URL + product.image }`}
                        sx={{
                            width:{ xs:'100%', md:'60%' },
                            objectFit:'cover'
                        }}
                    />
                </Grid>

                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Producto:</Typography>
                    <Typography>{ product.name }</Typography>
                </Grid>
                
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Categoria:</Typography>
                    <Typography>{ product.category.name }</Typography>
                </Grid>
                
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Precio:</Typography>
                    <Typography>{ product.price }</Typography>
                </Grid>
                
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography>Cantidad:</Typography>
                    <Typography>{ product.stock }</Typography>
                </Grid>
                
                <Grid item xs={ 12 } sm={ 3 } md={ 2 }>
                    <Typography color='info.contrastText'>Acciones:</Typography>
                    <Box>
                        <IconButton color='secondary'>
                            <AiOutlineEdit/>
                        </IconButton>
                        <IconButton>
                            <AiOutlineDelete/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    )
}
