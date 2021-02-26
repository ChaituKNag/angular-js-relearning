// module.exports = async (req, res) => {
//   const response = await axios.get("https://reqres.in/api/users?page=2");
//   res.json(response.data);
// };

const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) =>
  res.json({
    page: "home"
  })
);

app.get("/second", (req, res) =>
  res.json({
    page: "second"
  })
);

app.get("/api", (req, res) => {
  res.json({
    page: "api home"
  });
});

app.get("/users", async (req, res) => {
  const response = await axios.get("https://reqres.in/api/users?page=2");
  res.json(response.data);
});

app.listen();
