import { FC } from 'react';

import { Product } from '../../interfaces/product';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useSale } from '../../hooks/useSale';

interface Props {
    product: Product;
    amount: number;
}

export const ProductCartSale: FC<Props> = ({ amount, product }) => {

    const { amountModify } = useSale();

    return (
        <Box
            sx={{
                display: 'flex',
                gap: '2rem',
                text: 'start',
                alignItems: 'center',
                mb: 5,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                <Box
                    component='img'
                    src={`${import.meta.env.VITE_API_URL + product.image}`}
                    sx={{
                        maxWidth: '150px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />

                <Box >
                    <Typography variant="subtitle1">{product.name}</Typography>
                    <Typography variant="subtitle2">Precio: {product.price}Bs</Typography>
                </Box>
                <TextField
                    type='number'
                    sx={{ maxWidth: '70px' }}
                    value={amount}
                    onChange={(e) => amountModify(product, e.target.value) }
                />
                <Button color='secondary'>Remover</Button>
            </Box>
                

        </Box>
    )
}
