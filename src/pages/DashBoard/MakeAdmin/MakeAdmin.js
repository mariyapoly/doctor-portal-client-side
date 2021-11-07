import { Alert, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import StyleButton from '../../StyleButton/StyleButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [addminSuccess, setAddminSuccess] = useState(false);

    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {

        const user = { email }

        fetch('https://shielded-shore-60672.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAddminSuccess(true);
                }
            })

        e.preventDefault();
    }

    return (
        <Box>
            <Typography sx={{ textAlign: 'center', fontWeight: 700 }} variant="h3">Make An Admin</Typography>
            <form onSubmit={handleAdminSubmit} style={{ textAlign: 'center', marginTop: '50px ' }}>
                <TextField
                    sx={{ width: '50%' }}
                    onBlur={handleOnBlur}
                    type="email"
                    label="Make An Admin"
                    variant="standard" />
                <StyleButton type="submit">make admin
                </StyleButton>
            </form>
            {addminSuccess && <Alert severity="success">Admin Add Successfully</Alert>}
        </Box>
    );
};

export default MakeAdmin;