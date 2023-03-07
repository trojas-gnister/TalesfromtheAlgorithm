import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      username
      password
    }
  }
`;

