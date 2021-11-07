import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {

    const { name, time } = booking || {};
    const { user } = useAuth();
    const initailInfo = { paitentName: user?.displayName, email: user?.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initailInfo);


    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[feild] = value;
        setBookingInfo(newInfo);
    }


    const handleSubmitBtn = e => {
        // data collection
        const appointment = {
            ...bookingInfo,
            time,
            servieName: name,
            date: date.toLocaleDateString()
        }
        // send to the server
        fetch('https://shielded-shore-60672.herokuapp.com/appointments', {

            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                }
            })

        handleClose()
        e.preventDefault();

    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleSubmitBtn}>
                            <TextField
                                disabled
                                sx={{ my: 2, width: '95%' }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                sx={{ my: 2, width: '95%' }}
                                id="outlined-size-small"
                                name="paitentName"
                                defaultValue={user.displayName}
                                size="small"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ my: 2, width: '95%' }}
                                id="outlined-size-small"
                                defaultValue={user.email}
                                size="small"
                                name="email"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ my: 2, width: '95%' }}
                                id="outlined-size-small"
                                defaultValue='Your Phone number'
                                name="phone"
                                onBlur={handleOnBlur}
                                size="small"
                            />
                            <TextField
                                sx={{ my: 2, width: '95%' }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                                disabled
                            />
                            <Button type='submit' variant="contained" style={{ background: 'linear-gradient( to right,#18D3B1,#0FCFEC)' }}>SEND</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
};

export default BookingModal;


