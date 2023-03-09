const { gql } = require('apollo-server');

module.exports = gql`
type User {
    username: String,
    password: String,
    token: String
}
input RegisterInput {
    username: String,
    password: String,
    confirmPassword: String
}
input LoginInput {
    password: String 
}
type Query {
    user(id: ID!): User
}
type Mutation {
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
}
`
