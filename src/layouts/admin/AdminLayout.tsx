import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"
import { Toast } from "../../components/ui/Toast"

export const AdminLayout = () => {
    return (
        <Box sx={{ position:'relative', overflow:'hidden' }}>
            <Toast/>
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
