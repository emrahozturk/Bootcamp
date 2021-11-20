const express = require("express");
const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send("<title> HOMEPAGE </title>" + "<h2> HELLO THERE </h2>");
});

app.get("/about", (req, res) => {
  
    res.status(200).send("<title>ABOUT PAGE </title>" + "<h2>  ABOUT ME </h2>");

});

app.get("/contact", (req, res) => {
  res.status(200).send("<title> CONTACT </title>" + "<h2>  CONTACT MY MAIL </h2>");
});

app.get("*", (req, res) => {
  res.status(404).send("<title> 404 </title>" + "<h2>404 NOT FOUND</h2>");
});

app.listen(port, () => {});
