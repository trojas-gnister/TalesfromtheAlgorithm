const storeResponse = (responseText) => {
  const db = require("mongoose");
  const Response = db.model("Response");

  const response = new Response({
    responseText,
  });

  response.save();
};

export default storeResponse;
