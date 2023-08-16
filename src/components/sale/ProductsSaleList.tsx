import { Box, Button, Typography } from "@mui/material";
import { useProducts } from "../../hooks/useProducts"
import { useSale } from "../../hooks/useSale";

export const ProductsSaleList = () => {
    const { products } = useProducts();
    const { addProductCart } = useSale();


    return (
        <>
            {
                products.map(product => (
                    <Box key={ product.id + product.name } display='flex' sx={{ gap:'2rem', mb: 5 }}>

                        <Box  
                            component='img'
                            src={`${ import.meta.env.VITE_API_URL + product.image }`}
                            sx={{
                                maxWidth: '150px',
                                width: '100%',
                                objectFit:'cover'
                            }}
                        />

                        <Box >
                            <Typography variant="subtitle1">{ product.name }</Typography>
                            <Typography variant="subtitle2">Precio: { product.price }Bs</Typography>
                            <Typography variant="subtitle2">Stock: { product.stock }</Typography>
                            <Button
                                onClick={() => addProductCart( product )}
                                >
                                Agregar al carrito
                            </Button>
                        </Box>
                    </Box>
                ))
            }

        </>
    )
}
