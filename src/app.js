"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const path = require("path");
const app = express();
const routes = require("./routes");
const Joeldev = require("./middleware/servicejoeldev")
app.set("view engine", "hbs");
hbs.registerPartials("./views/partials");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public/")));
app.use(routes);
app.use(Joeldev.hosting,(req, res) => {
  res.status(404).render("404");
});
module.exports = app;
