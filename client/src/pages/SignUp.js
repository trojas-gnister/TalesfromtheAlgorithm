import React, { useState } from 'react';
import { Container } from '@mui/material'
import Background from '../assets/darkest-background.png';
import SignUpForm from '../components/SignUpForm'
import DetailedAppBar from '../components/DetailedAppBar';

import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';


const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
      });

    let addProfile;
    //, { error, data }] = useMutation(ADD_PROFILE);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

        // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

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
            <DetailedAppBar />
            <SignUpForm />
            </div>
        </Container>
    )
}

export default Signup