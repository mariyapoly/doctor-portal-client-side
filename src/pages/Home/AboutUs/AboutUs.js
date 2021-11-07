import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import aboutImg from '../../../images/treatment.png'

const AboutUs = () => {
    return (
        <Box style={{ marginBottom: '200px' }}>
            <Container>
                <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={5}>
                        <img style={{ width: '100%' }} src={aboutImg} alt="aboutImg" />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box>
                            <Typography sx={{ color: '#203047', fontSize: '45px', fontWeight: '500' }} variant='h3'>Exceptional Dental <br />
                                Care, on Your Terms</Typography>
                            <Typography sx={{ color: '#B2B2B2', margin: '40px 0 30px', paddingRight: '190px', lineHeight: '28px' }}>It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsumis that it has
                                a more-or-less normal distribution of letters,as opposed
                                to using ‘Content here, content here’, making it look like
                                readable English. Many desktop publishing packages
                                and web page </Typography>
                            <Button style={{ background: 'linear-gradient( to right,#18D3B1,#0FCFEC)', fontSize: '16px', fontWeight: 'bold', color: '#fff', borderRadius: '0', padding: '10px 25px', marginTop: '40px' }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default AboutUs;