import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png';
import appointment from '../../../images/appointment-bg.png';


const appointmentBg = {
    background: `url(${appointment})`,
    backgroundColor: 'rgba(58,66,86,0.95)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBnner = () => {
    return (
        <Box style={appointmentBg}>
            <Container>
                <Box sx={{ flexGrow: 1, }}>
                    <Grid container spacing={2} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                        <Grid item xs={12} md={5}>
                            <img sm={{ width: '100%' }}
                                style={{
                                    width: '635px', marginLeft: '-115px', marginTop: '-170px'
                                }}
                                src={doctor} alt="doctor" />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box sx={{
                                textAlign: 'left'
                            }}>

                                <Typography variant="h6" sx={{ mb: 2, color: '#5FC7C7', fontWeight: 600 }} style={{ color: '#6ACECE' }}>
                                    APPOINTMENT
                                </Typography>
                                <Typography variant="h4" style={{ color: 'white', fontSize: '45px', fontWeight: '500' }}>
                                    Make an appointment Today
                                </Typography>
                                <Typography sx={{ my: 3 }} style={{ color: 'white' }}>
                                    It is a long established fact that a reader will be distractedby the readable
                                    content of a page when looking at its
                                </Typography>
                                <Button style={{ background: 'linear-gradient( to right,#18D3B1,#0FCFEC)', fontSize: '16px', fontWeight: 'bold', color: '#fff', borderRadius: '0', padding: '10px 25px', marginTop: '40px' }}>Learn More</Button>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Box >
    );
};

export default AppointmentBnner;