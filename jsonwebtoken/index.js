const jwt = require("jsonwebtoken");

const SECRET = "milanesa";

function sign(data) {
  return jwt.sign(data, SECRET, { expiresIn: "2h" });
}

function verify(token) {
  return jwt.verify(token, SECRET);
}

const token = sign({
  email: "obi-wan@kenobi.com",
  rol: "admin",
});

console.log("TOKEN", token);

const payload = verify(token + "s");

console.log("VALID", payload);
