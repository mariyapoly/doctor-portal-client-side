import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';

const bannerBg = {
    background: `url(${bg}) no-repeat center`,
    backgroundSize: 'cover',
    padding: '250px 0 200px'
}

const Banner = () => {
    return (
        <Box style={bannerBg}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ pr: 15 }}>
                        <Typography style={{ color: '#203047', fontSize: '50px' }} variant="h3">Your New Smile Starts Here
                        </Typography>
                        <Typography style={{ color: '#B4B4B4', fontSize: '16px', marginTop: '40px' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                        </Typography>
                        <Button style={{ background: 'linear-gradient( to right,#18D3B1,#0FCFEC)', fontSize: '16px', fontWeight: 'bold', color: '#fff', borderRadius: '0', padding: '10px 25px', marginTop: '40px' }}>Get appointment</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;