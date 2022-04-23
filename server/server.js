const axios = require("axios");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("yo");
});

const domain = {
  valid: true,
  isp: "testing",
};
app.get("/domain", (req, res) => {
  axios
    .get("http://ip-api.com/json/chayceknaub.com")
    .then((response) => {
      console.log(response.data.status);
      console.log(response.data);
      res.json(response.data);
    })
    // .then(res.json(response.data.data))
    .catch((error) => {
      console.log(error);
    });
});
app.listen(8000, () => {
  console.log(`Server listening at http://localhost:8000`);
});
