import { FormEvent, useState, useContext } from 'react';

import { ProductCartSale } from '..';
import { useSale } from '../../hooks/useSale';
import { ToastContext } from '../../context';
import { TextField, Box, Typography, Button } from '@mui/material';

export const NewSaleForm = () => {

    const [client, setClient] = useState('');
    const { cart, total, createNewSale } = useSale();
    const {showToast} = useContext(ToastContext)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (client.trim() === '') {
            showToast('error', 'Debe ingrsar un cliente');
            return;
        }

        createNewSale(client);

    }

    return (
        <Box component='form' onSubmit={handleSubmit}>
            <TextField
                name="client"
                type='text'
                label="Nombre del cliente"
                value={ client }
                onChange={(e) => setClient(e.target.value)}
            />
            <Typography variant='h3' >Carrito</Typography>
            {
                cart.length === 0
                ? (
                    <Typography sx={{ textAlign:'center' }} >El carrito esta vacio</Typography>
                )

                : (
                    cart.map(({product, amount} ) => (
                        <ProductCartSale key={`${ product.name }-${ product.id }`} product={product} amount={amount}/>
                    ))
                )
            }
            <Typography variant='h2' textAlign='end' mt={ 5 }>Total: {total}Bs </Typography>
            <Button sx={{ width:'100%', mt: 3 }} type="submit" size='large'>Generar Venta</Button>
        </Box>
    )
}
