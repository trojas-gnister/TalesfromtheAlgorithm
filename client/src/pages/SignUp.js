import React from 'react';
import { Container } from '@mui/material'
import Background from '../assets/darkest-background.png';
import SignUpForm from '../components/SignUpForm'
import SimpleAppBar from '../components/SimpleAppBar';

export default function SignUp() {
    return (
        <Container maxWidth={true} disableGutters>
            <div
        style={{
            backgroundImage:`url(${Background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '99vw',
            minHeight: '100vh',
        }}
        >
            <SimpleAppBar />
            <SignUpForm />
            </div>
        </Container>
    )
}