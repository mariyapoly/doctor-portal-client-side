import { Container, Grid, ListItem, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography style={{ color: '#707070', marginBottom: '15px' }} variant="h5">Doctor Portal</Typography>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Emergency Dental Care
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Check Up
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Treatment of Personal Diseases
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Tooth Extraction
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Check Up
                            </ListItemText>
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography style={{ color: '#5FC7C7', marginBottom: '15px' }} variant="h5">Services</Typography>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Emergency Dental Care
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Check Up
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Treatment of Personal Diseases
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Tooth Extraction
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ p: 0, color: '#848B9F' }}>
                            <ListItemText>
                                Check Up
                            </ListItemText>
                        </ListItem>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;