const bcrypt = require("bcrypt");

function encryptPassword(password) {
  bcrypt
    .genSalt()
    .then((salt) => {
      console.log("SALT CREATED", salt);
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      console.log("hash", hash);
    });
}

encryptPassword("hola");
