import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { ToastContext } from '../../context';

export const Toast = () => {

    const { right, type, message } = useContext( ToastContext );

    return (
        <Box
            sx={{
                borderRadius:'10px',
                padding:'1rem',
                position:'absolute',
                width: 'max-content',
                zIndex: '4',
                top:'1rem',
                right,
                textAlign: 'center', 
                backgroundColor: type == 'error' ? '#DC2626' : '#059669',
                transition: 'all .3s ease-in-out'
            }}
        >
            <Typography color='#fff'>{ message }</Typography>
        </Box>
    )
}
