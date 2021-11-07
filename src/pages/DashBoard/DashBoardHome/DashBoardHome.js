import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashBoardHome = () => {

    const [date, setDate] = useState(new Date());

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>
                <Grid item xs={7}>
                    <Appointments date={date}></Appointments>
                </Grid>
            </Grid>
        </>
    );
};

export default DashBoardHome;