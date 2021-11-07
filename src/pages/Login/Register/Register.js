import { Alert, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import StyleButton from '../../StyleButton/StyleButton';
import loginImg from '../../../images/login.png'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { registerUser, authError, user, isLoading, signInUsingGoogle } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginDtata = { ...loginData };
        newLoginDtata[field] = value;
        setLoginData(newLoginDtata)
    }
    const handleLoginBtn = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match')
            return
        }
        registerUser(loginData?.email, loginData?.password, loginData?.name, history)
        e.preventDefault();
    }

    // handle register google

    const handleGoogleRegister = () => {
        signInUsingGoogle(history)
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} >
                        <Box sx={{ background: '#fff', boxShadow: '-10px 10px 14px -5px rgba(0,0,0,0.15)', p: '40px 40px 50px !important' }}>
                            <Typography variant="h6">
                                Register
                            </Typography>
                            {isLoading ? <CircularProgress /> : <>
                                <form onSubmit={handleLoginBtn}>
                                    <TextField
                                        id="standard-basic"
                                        label="Your Name"
                                        variant="standard"
                                        name="name"
                                        onBlur={handleOnBlur}
                                        sx={{ width: '100%', margin: '30px 0' }}
                                    />
                                    <TextField
                                        type="email"
                                        id="standard-basic1"
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
                                        sx={{ width: '100%', margin: '30px 0' }}
                                    />
                                    <TextField
                                        id="standard-basic3"
                                        label="Re-Enter-Password"
                                        variant="standard"
                                        type="password"
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        sx={{ width: '100%', margin: '0 0 40px 0' }}
                                    />
                                    <StyleButton type="submit"
                                        sx={{ width: '100%' }}>Sign up
                                    </StyleButton>
                                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                                    {authError && <Alert severity="error">{authError}</Alert>}
                                    <NavLink style={{ textDecoration: "none", display: 'inline-block', margin: '15px 0' }} to="/login">Alreay have an account? please login</NavLink>
                                </form>
                                <StyleButton type="submit"
                                    onClick={handleGoogleRegister}
                                    sx={{ width: '100%' }}>Google signup
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

export default Register;