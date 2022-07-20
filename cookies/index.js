const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    `<form method="POST" action="cookies">
      <input name="name" placeholder="cookie name"/>
      <input name="cookie" placeholder="cookie value"/>
      <button>Submit</button>
    </form>`
  );
});

app.get("/cookies", (req, res) => {
  const cookies = req.cookies;

  console.log("COOKIES", req.cookies);

  res.send(cookies.token);
});

app.post("/cookies", (req, res) => {
  const { name, cookie } = req.body;

  res.cookie(name, cookie);

  res.sendStatus(201);
});

app.listen(3000, () => console.log("Server running"));
