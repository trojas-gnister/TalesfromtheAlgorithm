import React from 'react';
import { Container } from '@mui/material'
import Image from '../assets/DALLE-bottom-background.jpg';
import SignUpForm from '../components/SignUpForm'

export const SignUp = () => {
    return (
        <Container maxWidth={true} disableGutters>
            <div
        style={{
            backgroundImage:`url(${Image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '99vw',
            minHeight: '100vh',
        }}
        >
            <SignUpForm />
            </div>
        </Container>
    )
}