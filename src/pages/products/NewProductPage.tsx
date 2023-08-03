import { Typography } from "@mui/material"
import { NewProductForm } from "../../components"

export const NewProductPage = () => {
    return (
        <>
            <Typography variant="h1" mb={ 3 }>Crea un nuevo producto</Typography>
            <NewProductForm/>
        </>
    )
}
