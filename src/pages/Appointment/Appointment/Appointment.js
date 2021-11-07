import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvaliableAppoinment from '../AvaliableAppoinment/AvaliableAppoinment';

const Appointment = () => {

    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvaliableAppoinment date={date}></AvaliableAppoinment>
        </div>
    );
};

export default Appointment;