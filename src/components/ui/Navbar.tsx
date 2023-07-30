import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context';
import { DASHBOARD_MENU } from '../../constants';
import Logo from "../../assets/images/logo-innova-inventory.png";
import { AppBar, Toolbar, Box, List, ListItem, ListItemText, Button } from '@mui/material';

export const Navbar = () => {

    const { authLogout } = useContext(AuthContext);
    const navigate = useNavigate();


    return (
        <AppBar>
            <Toolbar>
                <Box
                    component='img'
                    src={ Logo }
                    sx={{ 
                        maxWidth:'200px',
                        width:'100%',
                    }}
                />

                <Box flex={1}/>

                <Box>
                    <List sx={{ display:'flex' }}>
                        {
                            DASHBOARD_MENU.map(option => (
                                <ListItem
                                    key={ option.path }
                                    onClick={() => navigate(option.path)}
                                >
                                    <ListItemText sx={{ cursor:'pointer' }}  primary={ option.name }/>
                                </ListItem>
                            ))
                        }


                    </List>
                </Box>


                <Box flex={1}/>
                <Button
                    onClick={() => authLogout()}
                >
                    Cerrar Sesion
                </Button>

            </Toolbar>
        </AppBar>
    )
}
