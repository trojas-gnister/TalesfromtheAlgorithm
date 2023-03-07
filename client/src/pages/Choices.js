import React from 'react';
import {
    Container,
    FormControl,
    RadioGroup,
    FormLabel,
    FormControlLabel,
    Radio,
    Paper,
    } from '@mui/material'
import Background from '../assets/darkest-background.png'
import DetailedAppBar from '../components/DetailedAppBar'

export default function Choices() {
    return (
    <Container maxWidth={false} disableGutters
          style={
            {
              backgroundImage:`url(${Background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '99vw',
              minHeight: '230vh',
            }
          }
        >
            <DetailedAppBar />

            {/* At some point, we should probably makes these components -- T */}

            {/* Genres */}
            <Paper elevation={24}
            sx={{
                bgcolor: '#11153A',
                padding: 5,
                width: '50%',
                marginTop: 5,
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 5,
                }}>
                <FormControl>
                    <FormLabel color='primary' id="demo-radio-buttons-group-label">1. What kind of story would you like to tell?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Fantasy"
                        name="genre-choices"
                    >
                        <FormControlLabel value="Fantasy" control={<Radio />} label="Fantasy" />
                        <FormControlLabel value="Mystery" control={<Radio />} label="Mystery" />
                        <FormControlLabel value="Horror" control={<Radio />} label="Horror" />
                        <FormControlLabel value="Romance" control={<Radio />} label="Romance" />
                    </RadioGroup>
                </FormControl>
            </Paper>


                {/* end */}
        </Container>

    );
};