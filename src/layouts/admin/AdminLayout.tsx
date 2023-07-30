import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"

export const AdminLayout = () => {
    return (
        <Box sx={{ position:'relative', overflow:'hidden' }}>
            {/* NAVBAR */}
            <Navbar/>

            {/* MAIN */}
            <Box
                component='main'
                sx={{
                    maxWidth: { xs:'95%', md:'80%' },
                    margin:'auto',
                    padding:'2rem 0'
                }}
            >
                <Outlet/>
            </Box>

        </Box>
    )
}
