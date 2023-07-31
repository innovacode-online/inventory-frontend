import { Card, Grid, IconButton, Typography, Box } from '@mui/material';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { Category } from '../../interfaces/category';
import { FC, useContext } from 'react';
import { formatDate } from '../../helpers';
import { CategoriesContext } from '../../context/categories/CategoriesContext';


interface Props {
    category: Category;
}

export const CategoryCard: FC<Props> = ({ category }) => {

    const { deleteCategory } = useContext(CategoriesContext)

    return (
        <Card sx={{ mb: 3, padding:'2rem' }}>
            <Grid container spacing={ 3 }>
                <Grid item xs={ 12 } md={ 3 }>
                    <Typography color='info.contrastText'>ID de la categoria:</Typography>
                    <Typography>{ category.id }</Typography>
                </Grid>
                <Grid item xs={ 12 } md={ 3 }>
                    <Typography color='info.contrastText'>Nombre de categoria:</Typography>
                    <Typography>{ category.name }</Typography>
                </Grid>
                <Grid item xs={ 12 } md={ 3 }>
                    <Typography color='info.contrastText'>Fecha de creacion:</Typography>
                    <Typography>{ formatDate( category.created_at ) }</Typography>
                </Grid>
                <Grid item xs={ 12 } md={ 3 }>
                    <Typography color='info.contrastText'>Acciones:</Typography>
                    <Box>
                        <IconButton color='secondary'>
                            <AiOutlineEdit/>
                        </IconButton>
                        <IconButton
                            onClick={() => deleteCategory(category.id)}
                        >
                            <AiOutlineDelete/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    )
}
