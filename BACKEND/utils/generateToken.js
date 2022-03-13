const jwt = require("jsonwebtoken");
//generating token using jwttoken
//when sending details need to send a token to frontend
//frontend use it to authenticate to backend

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", //token expires in 30days
  });
};

module.exports = generateToken;
