import { Typography } from "@mui/material"
import { NewCategoryForm } from "../../components"


export const NewCategoryPage = () => {
    return (
        <>
            <Typography variant="h1" mb={ 3 }>Crea una nueva categoria</Typography>   
            <NewCategoryForm/>
        </>
    )
}
