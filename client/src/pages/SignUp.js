import React from 'react';
import { useContext, useState } from 'react';
import { authContext } from '../contexts/AuthContext';
import { useForm} from "../utils/hooks";
import { useMutation } from "@apollo/client";

import { gql } from "graphql-tag"
import { useNavigate } from 'react-router-dom';

import { Container } from '@mui/material'
import Background from '../assets/darkest-background.png';
import SignUpForm from '../components/SignUpForm'
import DetailedAppBar from '../components/DetailedAppBar';


const REGISTER_USER = gql`
        mutation Mutation(
          $registerInput: RegisterInput!
        ) {
          registerUser(registerInput: $registerInput) {
            email
            username
            token
        }
      }
`

function Register(props) {
  const context = useContext(authContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [ registerUser, { loading } ] = useMutation(REGISTER_USER, {
    update(proxy, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate('/');
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { registerInput: values }
  });
}


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
            <DetailedAppBar />
            <SignUpForm />
            </div>
        </Container>
    )
}

