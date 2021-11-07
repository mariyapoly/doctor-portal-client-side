import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        img: fluride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        img: whitening
    }
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
                <Container>
                    <Typography sx={{ color: '#5FC7C7', fontWeight: 600, textAlign: 'center' }} variant="h6" component="div">
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{ mb: 5, fontSize: '45px', fontWeight: '500', textAlign: 'center', color: '#203047' }} variant="h4" component="div">
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;