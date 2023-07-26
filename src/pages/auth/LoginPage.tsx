import { Box, Grid } from "@mui/material"

import { bgAuthPages } from "../../constants"
import { LoginForm } from "../../components"

export const LoginPage = () => {
    return (
        <Box component='main'>
            <Grid container>
                <Grid item xs={ 12 } md={ 6 }
                    sx={{
                        background: bgAuthPages,
                        minHeight: '100vh',
                        display: { xs:'none', md:'flex' },
                        justifyContent:'center'
                    }}
                >

                </Grid>
                <Grid item xs={ 12 } md={ 6 }
                    sx={{
                        padding: '3rem',
                        background: { xs:bgAuthPages, md:'none'  },
                        minHeight: '100vh',
                        display: 'flex',
                        justifyContent:'center'
                    }}
                >
                    {/* FORMULARIO */}
                    <LoginForm/>
                </Grid>
            </Grid>
        </Box>
    )
}