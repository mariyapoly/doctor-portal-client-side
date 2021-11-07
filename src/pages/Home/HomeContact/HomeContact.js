import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import clock from '../../../images/clock.png';
import loaction from '../../../images/ic_location_on_48px.png';
import phone from '../../../images/phone-call.png';

const cardStyle = {
    background: '#1CC7C1',
    padding: '40px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const HomeContact = () => {
    return (
        <Box style={{ marginTop: '-100px' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Box style={cardStyle}>
                            <img style={{ width: '70px' }} src={clock} alt="clock" />
                            <Box sx={{ ml: 3, color: 'white' }}>
                                <Typography style={{ fontSize: '22px', fontWeight: '700' }} variant="h6">Opening Hours</Typography>
                                <Typography>Lorem Ipsum is simply dummy text of the pri</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Box style={cardStyle}>
                            <img style={{ width: '55px' }} src={loaction} alt="loaction" />
                            <Box sx={{ ml: 3, color: 'white' }}>
                                <Typography style={{ fontSize: '22px', fontWeight: '700' }} variant="h6">Visit our location</Typography>
                                <Typography>Brooklyn, NY 10036, United States</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Box style={cardStyle}>
                            <img style={{ width: '70px' }} src={phone} alt="phone" />
                            <Box sx={{ ml: 3, color: 'white' }} style={{ padding: '12px 0' }}>
                                <Typography style={{ fontSize: '22px', fontWeight: '700' }} variant="h6">Contact us now</Typography>
                                <Typography>+000 123 456789</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomeContact;