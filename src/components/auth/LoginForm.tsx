import { useState, FormEvent, useContext } from "react";
import { AuthContext } from "../../context";

import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material"

export const LoginForm = () => {

    const { authLogin, isLoading } = useContext( AuthContext )


    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');



    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if( email.trim() === "" || password.trim() === "" ){
            console.log('Ingrese datos validos');
            return;
        }

        authLogin( email, password );

    }

    return (
        <Box 
            component='form'
            onSubmit={handleSubmit}
            sx={{
                background:'#fff',
                borderRadius:'10px',
                padding:'3rem 2rem',
                textAlign:'center'
            }}
        >
            <Typography variant="h1" mb={ 4 }>Inicia Sesion</Typography>
            <TextField
                label="Correo electronico"
                type="email"
                name="email"
                value={ email }
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Contraseña"
                type="password"
                name="password"
                value={ password }
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" size="large" sx={{ width:'100%' }}>
                {
                    isLoading
                    ? <CircularProgress sx={{color: "#fff"}} size={20}/>
                    : 'Iniciar Sesion' 
                }
            </Button>
        </Box>
    )
}