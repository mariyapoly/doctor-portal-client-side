import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { logOut, user } = useAuth();

    const navLinkStyle = {
        textDecoration: 'none',
        color: '#707070',
        margin: '0 10px',
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: '400'
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute" style={{ background: 'no-repeat', boxShadow: 'none', padding: '25px 0' }}>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography style={{ color: '#707070' }} variant="h5">Doctor Portal</Typography>
                        <Box>
                            <NavLink style={navLinkStyle} to="/home">Home</NavLink>
                            <NavLink style={navLinkStyle} to="/about">About</NavLink>
                            <NavLink style={navLinkStyle} to="/dentalService">Dental Services</NavLink>
                            <NavLink style={navLinkStyle} to="/appointment">Appointment</NavLink>

                            {
                                user?.email ? <>
                                    <NavLink style={navLinkStyle} to="/dashBoard">DashBoard</NavLink>
                                    <button onClick={logOut}>Logout</button>
                                </>
                                    : <NavLink style={navLinkStyle} to="/login">Login</NavLink>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigation;