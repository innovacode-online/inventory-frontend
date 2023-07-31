import { FormEvent, useState, useContext } from 'react';

import { CategoriesContext, ToastContext } from '../../context';
import { Box, Button, CircularProgress, TextField } from '@mui/material';

export const NewCategoryForm = () => {
    const { showToast } = useContext(ToastContext);
    const { createNewCategory, isLoading } = useContext(CategoriesContext);

    const [newCategory, setNewCategory] = useState('');
    

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault();
        if( newCategory.trim() === '' ){
            showToast('error', 'Debe ingresar un nombre');
            return;
        }

        createNewCategory( newCategory );

    }

    return (
        <Box
            component='form'
            onSubmit={ handleSubmit }
            sx={{
                backgroundColor:'info.main',
                maxWidth:'550px',
                margin:'auto',
                borderRadius:'10px',
                padding:'3rem 2rem'
            }}
        >
            <TextField
                label='Nombre de la categoria'
                type='text'
                name='name'
                value={ newCategory }
                onChange={(e) => setNewCategory( e.target.value )}
            />
            <Button type='submit' sx={{ width:'100%' }} size='large'>
                {
                    isLoading
                    ? <CircularProgress size={ 30 } sx={{ color:'#fff' }}/>
                    : 'Crear categoria'
                }
            </Button>
        </Box>
    )
}
