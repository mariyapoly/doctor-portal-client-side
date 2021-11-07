import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import appoinmentChair from '../../../images/chair.png'
import appoinmentBg from '../../../images/bg.png'
import { Container, Typography } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';

const bg = {
    background: `url(${appoinmentBg}) no-repeat center`,
    backgroundSize: 'cover',
}

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Box style={bg}>
            <Container style={{ padding: '100px 0' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">
                            Appointment
                        </Typography>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={appoinmentChair} alt="appoinmentChair" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;