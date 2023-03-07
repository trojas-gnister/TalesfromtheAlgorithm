import React from 'react';
import { Container } from '@mui/material'
import Background from '../assets/DALLE-bottom-background.jpg';
import LoginForm from '../components/LoginForm';
import SimpleAppBar from '../components/SimpleAppBar';

export const Login = () => {
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
            <LoginForm />
            </div>
        </Container>
    )
}