import React from 'react';
import { Container } from '@mui/material'
import Image from '../assets/darkest-background.png';
import LoginForm from '../components/LoginForm';
import SimpleAppBar from '../components/SimpleAppBar';

export const Login = () => {
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
            <SimpleAppBar />
            <LoginForm />
            </div>
        </Container>
    )
}