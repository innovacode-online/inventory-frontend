import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, Button } from '@mui/material';


interface Props {
    path: string;
    textBtn: string;
    title: string
}

export const PageHeader: FC<Props> = ({ path, textBtn, title }) => {
    
    const navigate = useNavigate();

    return (
        <Box sx={{ display:'flex', justifyContent:'space-between', mb:3 }}>
            <Typography variant='h1'>{ title }</Typography>

            <Button
                onClick={() => navigate(path)}
            >
                { textBtn }
            </Button>
        </Box>
    )
}
