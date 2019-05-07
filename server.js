const express = require("express");
const router = express.Router();
const axios = require("axios");
const path = require("path");

const app = express();
var cors = require("cors");

// Then use it before your routes are set up:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  axios
    .get("https://books.zoho.com/api/v3/contacts?organization_id=649249007", {
      headers: {
        Authorization: "db36e02a50b57e081efe533a8a0f834b"
      }
    })
    .then(response => {
      let contactsArray = [];
      res.json(response.data.contacts);
    })
    .catch(err => {
      console.log("error");
    });
});

app.listen(5002, () => console.log("Listenting 5002 and working"));
