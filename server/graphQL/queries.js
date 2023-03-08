const getResponse = () => {
  const db = require("mongoose");
  const Response = db.model("Response");
  return Response.findOne({}, (err, response) => {
    if (err) {
      return err;
    }
    return response.responseText;
  });
};
export default getResponse;