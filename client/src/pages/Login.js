import React from 'react';
import { Container } from '@mui/material'
import Image from '../assets/DALLE-bottom-background.jpg';
import LoginForm from '../components/LoginForm'

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
            <LoginForm />
            </div>
        </Container>
    )
}