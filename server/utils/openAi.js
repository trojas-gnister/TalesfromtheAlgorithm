// Function to send a request to the OpenAI API
const sendRequest = async (body) => {
  // Construct the request body
  const body = {
    conversationId,
    text
  };
  // Make the request to the OpenAI API
  const response = async () => await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  });
  // Return the response data
  return await response.json();
};

// Function to handle the response from the OpenAI API
const handleResponse = (response) => {
  // Extract the response text from the response data
  const responseText = response.choices[0].text;
  // Return the response text
  return responseText;
};

export default {
  sendRequest,
  handleResponse,
};