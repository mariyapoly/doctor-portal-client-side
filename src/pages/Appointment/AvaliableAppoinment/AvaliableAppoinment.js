import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 am – 11:30 am',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 pm – 6:30 pm',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: ' 7:00 am – 8:30 am',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10 SPACES AVAILABLE',
    },
    {
        id: 6,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10 SPACES AVAILABLE',
    },
]

const AvaliableAppoinment = ({ date }) => {

    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container sx={{ textAlign: 'center', my: 10 }}>
            <Typography variant="h4" sx={{ mb: 5 }} style={{ color: '#1CC7C1' }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert sx={{ mb: 5 }} severity="success">Appoinment booked Successfully</Alert>}
            <Grid container spacing={4}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                        booking={booking}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvaliableAppoinment;