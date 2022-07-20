const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    `<form method="POST" action="cookies">
      <input name="name" placeholder="name"/>
      <input name="cookie" placeholder="value"/>
      <button>Submit</button>
    </form>`
  );
});

app.get("/cookies", (req, res) => {
  const cookies = req.cookies;
  console.log("COOKIE", cookies);

  res.send(cookies);
});

app.post("/cookies", (req, res) => {
  const { cookie, name } = req.body;
  console.log("COOKIE", cookie);

  res.cookie(name, cookie);

  res.redirect("/cookies");
});

app.listen(3000, () => console.log("Server running"));
