import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import TextField from '@mui/material/TextField';


const ContactBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(58,66,86,0.95)',
    backgroundBlendMode: 'darken, luminosity',
    padding: '100px 0'

}

const handleSubmitBtn = (e) => {


    e.preventDefault();
}

const ContactForm = () => {
    return (
        <Box fontStyle={ContactBg}>
            <Container>
                <Typography sx={{ color: '#5FC7C7', fontWeight: 600, textAlign: 'center' }} variant="h6" component="div">
                    OUR BLOG
                </Typography>
                <Typography sx={{ mb: 8, fontSize: '45px', fontWeight: '500', color: '#fff', textAlign: 'center', }} variant="h4" component="div">
                    From Our Blog News
                </Typography>
                <Grid container spacing="2">
                    <Grid item xs={12} md={8} sx={{ mx: 'auto', textAlign: 'center' }}>
                        <form onSubmit={handleSubmitBtn}>
                            <TextField
                                id="outlined-size-small"
                                placeholder="Email Address*"
                                required
                                size="small"
                                type="email"
                                sx={{ background: '#fff', borderRadius: '4px', width: '100%', mb: 3 }}
                            />
                            <TextField
                                id="outlined-size-small"
                                placeholder="Subject*"
                                required
                                size="small"
                                type="text"
                                sx={{ background: '#fff', borderRadius: '4px', width: '100%', mb: 3 }}
                            />
                            <TextField
                                id="outlined-size-small"
                                multiline
                                rows={4}
                                placeholder="Your Message*"
                                sx={{ background: '#fff', borderRadius: '4px', width: '100%', mb: 3 }}
                            />
                            <Button type="submit" style={{ background: 'linear-gradient( to right,#18D3B1,#0FCFEC)', fontSize: '16px', fontWeight: 'bold', color: '#fff', borderRadius: '0', padding: '10px 100px' }}>SUBMIT</Button>

                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactForm;