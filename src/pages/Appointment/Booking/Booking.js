import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {

    const { name, time, space } = booking || {};


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>

                    <Typography variant='h5' sx={{ mb: 3 }}>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        {time}
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 4 }}>
                        {space}
                    </Typography>
                    <Button onClick={handleOpen} variant="contained" style={{ background: 'linear-gradient( to right,#18D3B1,#0FCFEC)' }}>Book appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                handleClose={handleClose}
                open={open}
                date={date}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;