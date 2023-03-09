<<<<<<< HEAD
const storeResponse = (responseText) => {
  const db = require("mongoose");
  const Response = db.model("Response");

  const response = new Response({
    responseText,
  });

  response.save();
};
export default storeResponse;
=======
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
>>>>>>> c5ce9d5ac88293c3ad04a0c2252fdb750761b9c6
