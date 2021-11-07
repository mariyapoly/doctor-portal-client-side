import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({ date }) => {

    const dt = date.toLocaleDateString()

    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://shielded-shore-60672.herokuapp.com/appointments?email=${user.email}&date=${dt}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [dt])

    return (
        <div>
            <h2>Appointments {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell >Time</TableCell>
                            <TableCell >Service</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.paitentName}
                                </TableCell>
                                <TableCell >{row.time}</TableCell>
                                <TableCell >{row.servieName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;