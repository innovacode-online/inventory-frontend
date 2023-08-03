import { useContext, useState, ChangeEvent, FormEvent } from 'react';

import { CategoriesContext, ProductsContext } from "../../context";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"

export const NewProductForm = () => {
    
    const { categories } = useContext(CategoriesContext);
    const { createNewProduct } = useContext(ProductsContext);


    const [newProduct, setNewProduct] = useState({
        name:'',
        description:'',
        stock: 0,
        category_id: '1',
        price: '',
    });
    const [image, setImage] = useState<any>(null);

    const handleForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        setImage(file)
    } 

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        createNewProduct(image, newProduct);

    }


    return (
        <Grid
            container
            sx={{
                backgroundColor: 'info.main',
                width: '100%',
                maxWidth: '100%',
                padding: '3rem 2rem',
                borderRadius:'10px'
            }}
        >
            <Grid item xs={ 12 } md={ 6 }>
                {/* IMAGEN */}
            
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
                />
                <TextField
                    label="Agrega una descripción"
                    type="text"
                    name="description"
                    multiline
                    rows={4}
                    onChange={ e => handleForm(e) }

                />
                <TextField
                    label="Stock disponible"
                    type="number"
                    name="stock"
                    onChange={ e => handleForm(e) }

                />
                <TextField
                    label="Precio del producto"
                    type="number"
                    name="price"
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
                    Crear producto
                </Button>
            </Grid>
        </Grid>
    )
}
