import { Alert, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { Box } from '@mui/system';
import React, { useState } from 'react';
import StyleButton from '../../StyleButton/StyleButton';
import loginImg from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';




const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { logIn, authError, user, isLoading, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginDtata = { ...loginData };
        newLoginDtata[field] = value;
        setLoginData(newLoginDtata)
    }

    const handleLoginBtn = e => {
        logIn(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    // sign in google
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} >
                        <Box sx={{ background: '#fff', boxShadow: '-10px 10px 14px -5px rgba(0,0,0,0.15)', p: '80px !important' }}>
                            <Typography variant="h6">
                                Login
                            </Typography>
                            {isLoading ? <CircularProgress /> : <>
                                <form onSubmit={handleLoginBtn}>
                                    <TextField
                                        type="email"
                                        id="standard-basic"
                                        label="Your Email"
                                        variant="standard"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        sx={{ width: '100%' }}
                                    />
                                    <TextField
                                        id="standard-basic2"
                                        label="Password"
                                        variant="standard"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        sx={{ width: '100%', margin: '30px 0 40px' }}
                                    />
                                    <StyleButton type="submit"
                                        sx={{ width: '100%' }}>Sign in
                                    </StyleButton>

                                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                                    {authError && <Alert severity="error">{authError}</Alert>}
                                    <NavLink style={{ textDecoration: "none", display: 'inline-block', margin: '15px 0' }} to="/register">new user? please register</NavLink>
                                </form>
                                <StyleButton type="submit"
                                    onClick={handleGoogleSignIn}
                                    sx={{ width: '100%' }}>Google Signin
                                </StyleButton>
                            </>
                            }
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                        <img style={{ width: '100%' }} src={loginImg} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Login;