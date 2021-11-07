import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';



const Service = (props) => {

    const { name, img, description } = props.service;


    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    height="140"
                    style={{ width: 'auto', height: '80px', margin: '0 auto 20px' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography sx={{ color: '#565E69', fontSize: '30px', marginBottom: '30px' }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, px: 5, }} color="#B4B4B4">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;