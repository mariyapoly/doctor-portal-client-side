import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, img, phone } = doctor || {};
    return (
        <Grid item sx={12} md={4}>
            <img style={{ width: '100%' }} src={img} alt="" />
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h5' sx={{ color: '#3C3C3E', fontWeight: '700', mt: 2 }}>
                    {name}
                </Typography>
                <Typography sx={{ color: '#B3B2B5', mt: 1 }}>
                    {phone}
                </Typography>
            </Box>
        </Grid >
    );
};

export default Doctor;