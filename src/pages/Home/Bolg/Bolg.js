import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import blogImg1 from '../../../images/blog-1.png';
import blogImg2 from '../../../images/blog-2.png';
import blogImg3 from '../../../images/people-2.png';

const Bolg = () => {
    return (
        <Box sx={{ mb: 15 }}>
            <Container>
                <Typography sx={{ color: '#5FC7C7', fontWeight: 600, textAlign: 'center' }} variant="h6" component="div">
                    OUR BLOG
                </Typography>
                <Typography sx={{ mb: 8, fontSize: '45px', fontWeight: '500', color: '#203047', textAlign: 'center', }} variant="h4" component="div">
                    From Our Blog News
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={1} sx={{ px: 4, py: 5 }}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <img style={{ width: '90px', height: '90px' }} src={blogImg1} alt="blogImg1" />
                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ color: '#3C3C3E', fontWeight: 700, mb: 1 }}>
                                            Dr.Caudi
                                        </Typography>
                                        <Typography sx={{ color: '#B3B2B5' }}>
                                            23 April 2019
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="h5" sx={{ color: '#3C3C3E', fontWeight: '600', fontSize: '21px', mb: 3 }}>
                                    2 times of brush in a day can
                                    Keep you healthy
                                </Typography>
                                <Typography sx={{ color: '#B3B2B5', pr: 10 }}>
                                    It is a long established fact that
                                    by the readable content of a lot
                                    layout.The point
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={1} sx={{ px: 4, py: 5 }}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <img style={{ width: '90px', height: '90px' }} src={blogImg2} alt="blogImg2" />
                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ color: '#3C3C3E', fontWeight: 700, mb: 1 }}>
                                            Dr.Caudi
                                        </Typography>
                                        <Typography sx={{ color: '#B3B2B5' }}>
                                            23 April 2019
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="h5" sx={{ color: '#3C3C3E', fontWeight: '600', fontSize: '21px', mb: 3 }}>
                                    2 times of brush in a day can
                                    Keep you healthy
                                </Typography>
                                <Typography sx={{ color: '#B3B2B5', pr: 10 }}>
                                    It is a long established fact that
                                    by the readable content of a lot
                                    layout.The point
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={1} sx={{ px: 4, py: 5 }}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <img style={{ width: '90px', height: '90px' }} src={blogImg3} alt="blogImg3" />
                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="h6" sx={{ color: '#3C3C3E', fontWeight: 700, mb: 1 }}>
                                            Dr.Caudi
                                        </Typography>
                                        <Typography sx={{ color: '#B3B2B5' }}>
                                            23 April 2019
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="h5" sx={{ color: '#3C3C3E', fontWeight: '600', fontSize: '21px', mb: 3 }}>
                                    2 times of brush in a day can
                                    Keep you healthy
                                </Typography>
                                <Typography sx={{ color: '#B3B2B5', pr: 10 }}>
                                    It is a long established fact that
                                    by the readable content of a lot
                                    layout.The point
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Bolg;