import { FC } from 'react'
import { useContext, useState, ChangeEvent, FormEvent } from 'react';

import { Product } from '../../interfaces/product';
import { CategoriesContext, ProductsContext } from "../../context";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"



interface Props{
    product: Product;
}

export const EditProductForm: FC<Props> = ({ product }) => {
    const { categories } = useContext(CategoriesContext);
    const { editProduct } = useContext(ProductsContext);
    
    const [image, setImage] = useState<any>(null);

    const [newProduct, setNewProduct] = useState({
        name: product.name,
        description: product.description,
        stock: product.stock,
        category_id: 1,
        price: product.price,
    });

    const handleForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<number>) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setImage(file)
    } 

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        editProduct(product.id, image, newProduct);

    }


    return (  
        <Grid
            container
            spacing={ 5 }
            sx={{
                backgroundColor: 'info.main',
                width: '100%',
                maxWidth: '100%',
                padding: '3rem 2rem',
                borderRadius:'10px'
            }}
        >
            <Grid item xs={ 12 } md={ 6 } sx={{ display:'grid', alignItems:'center', justifyContent:'center' }}>
                {/* IMAGEN */}
                {
                    image && (
                        <>
                            <Typography variant="h2" mb={3} textAlign='center'>Imagen del producto</Typography>
                            <img style={{ width:'50%', margin:'auto' }} src={ URL.createObjectURL(image) }/>
                        </>
                    )
                }
                <TextField
                    type="file"
                    margin="normal"
                    name="image"
                    onChange={handleFileChange}
                />
            </Grid>


            <Grid item xs={ 12 } md={ 6 }>
                <TextField
                    label="Nombre del producto"
                    type="text"
                    name="name"
                    onChange={ e => handleForm(e) }
                    value={ newProduct.name }
                    
                />
                <TextField
                    label="Agrega una descripción"
                    type="text"
                    name="description"
                    multiline
                    rows={4}
                    value={ newProduct.description }
                    onChange={ e => handleForm(e) }

                />
                <TextField
                    label="Stock disponible"
                    type="number"
                    name="stock"
                    value={ newProduct.stock }
                    onChange={ e => handleForm(e) }

                />
                <TextField
                    label="Precio del producto"
                    type="number"
                    name="price"
                    value={ newProduct.price }
                    onChange={ e => handleForm(e) }

                />

                <FormControl  sx={{ width:'100%' }}>
                    <InputLabel>Categoria</InputLabel>
                    <Select
                        value={ newProduct.category_id }
                        label="Categoria"
                        name="category_id"
                        onChange={ e => handleForm(e) }

                    >   
                        {
                            categories.map(category => (
                                <MenuItem key={ category.id } value={ category.id }>
                                    { category.name }
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                <Button 
                    sx={{ mt:3, width:'100%' }} 
                    onClick={handleSubmit}
                >
                    Actualizar producto
                </Button>
            </Grid>
        </Grid>
    )
}
