const bcrypt = require("bcrypt");

function encryptPassword(password, salt) {
  bcrypt.hash(password, salt).then((hash) => {
    console.log("HASH", hash);
  });
}

const salt = bcrypt.genSaltSync();
console.log("SALT", salt);

encryptPassword("pochoclo9", salt);
encryptPassword("pochoclo9", salt);
encryptPassword("pochocle9", salt);
