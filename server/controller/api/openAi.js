const sendRequest = async (body) => {
  const body = {
    conversationId,
    text
  };
  const response = async () => await fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  });
  return await response.json();
};
const handleResponse = (response) => {
  const responseText = response.choices[0].text;
  return responseText;
};
export default { sendRequest, handleResponse };