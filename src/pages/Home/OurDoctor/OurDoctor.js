import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctorImg from '../../../images/doctor-small.png';
import Doctor from '../Docotor/Doctor';

const OurDoctor = () => {
    const doctors = [
        {
            id: 1,
            name: 'Dr. Caudi',
            img: `${doctorImg}`,
            phone: '+61 452 200 126'
        },
        {
            id: 2,
            name: 'Dr. Caudi',
            img: `${doctorImg}`,
            phone: '+61 452 200 126'
        },
        {
            id: 3,
            name: 'Dr. Caudi',
            img: `${doctorImg}`,
            phone: '+61 452 200 126'
        }
    ]
    return (
        <Box sx={{ mb: 10 }}>
            <Container>
                <Typography sx={{ color: '#5FC7C7', fontWeight: 600, textAlign: 'center' }} variant="h6" component="div">
                    OUR BLOG
                </Typography>
                <Typography sx={{ mb: 8, fontSize: '45px', fontWeight: '500', color: '#203047', textAlign: 'center', }} variant="h4" component="div">
                    From Our Blog News
                </Typography>
                <Grid container spacing={4}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default OurDoctor;