import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RepeatOneSharp } from "@mui/icons-material";

const httpLink = createHttpLink({
  uri: "/api/openai",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const generateResponse = async (prompt) => {
  const response = await client.mutate({
    mutation: gql`
      mutation GenerateResponse($prompt: String!) {
        generateResponse(prompt: $prompt)
      }
    `,
    variables: {
      prompt: prompt,
    },
  });
  return response.data.generateResponse;
};

module.exports = generateResponse;
