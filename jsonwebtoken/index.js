const jwt = require("jsonwebtoken");

const SECRET = "milanesa";

function sign(data) {
  const token = jwt.sign(data, SECRET, {
    expiresIn: "1d",
  });

  return token;
}

function verify(token) {
  return jwt.verify(token, SECRET);
}

const token = sign({ user: "facu" });
console.log("TOKEN", token);

const valid = verify(token);
console.log("VERIFY", valid);
