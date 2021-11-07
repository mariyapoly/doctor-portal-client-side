import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import clientImg1 from '../../../images/people-1.png';
import clientImg2 from '../../../images/people-2.png';
import clientImg3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <Box sx={{ py: 15 }}>
            <Container>
                <Typography sx={{ color: '#5FC7C7', fontWeight: 600 }} variant="h6" component="div">
                    TESTIMONIAL
                </Typography>
                <Typography sx={{ mb: 5, fontSize: '45px', fontWeight: '500', color: '#203047' }} variant="h4" component="div">
                    What’s Our Patients <br />
                    Says
                </Typography>
                <Grid container spacing={3}>
                    <Grid item sx={12} md={4}>
                        <Paper elevation={3} sx={{ px: 4, py: 5 }}>
                            <Typography sx={{ color: '#595762', mb: 7, pr: 7 }}>
                                It is a long established fact that
                                by the readable content of a lot
                                layout. The point of using Lorem
                                a more-or-less normal distribu
                                to using ‘Content here, content
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '90px', height: '90px' }} src={clientImg1} alt="clientImg1" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" sx={{ color: '#5FC7C7', fontWeight: 700, mb: 1 }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{ color: '#8F8C9B' }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item sx={12} md={4}>
                        <Paper elevation={3} sx={{ px: 4, py: 5 }}>
                            <Typography sx={{ color: '#595762', mb: 7, pr: 7 }}>
                                It is a long established fact that
                                by the readable content of a lot
                                layout. The point of using Lorem
                                a more-or-less normal distribu
                                to using ‘Content here, content
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '90px', height: '90px' }} src={clientImg2} alt="clientImg2" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" sx={{ color: '#5FC7C7', fontWeight: 700, mb: 1 }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{ color: '#8F8C9B' }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item sx={12} md={4}>
                        <Paper elevation={3} sx={{ px: 4, py: 5 }}>
                            <Typography sx={{ color: '#595762', mb: 7, pr: 7 }}>
                                It is a long established fact that
                                by the readable content of a lot
                                layout. The point of using Lorem
                                a more-or-less normal distribu
                                to using ‘Content here, content
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: '90px', height: '90px' }} src={clientImg3} alt="clientImg3" />
                                <Box sx={{ ml: 2 }}>
                                    <Typography variant="h6" sx={{ color: '#5FC7C7', fontWeight: 700, mb: 1 }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography sx={{ color: '#8F8C9B' }}>
                                        California
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonial;