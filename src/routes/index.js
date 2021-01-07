"use strict";
const express = require("express");
const api = express.Router();
const nodemailer = require("nodemailer");
const config = require("../config");
const Joeldev = require("../middleware/servicejoeldev")
/*api.get("/", Joeldev.hosting, (req, res) => {
  res.status(200).render("index");
});

api.get("/carta", Joeldev.hosting,(req, res) => {
  res.status(200).render("carta");
});
api.get("/nosotros", Joeldev.hosting,(req, res) => {
  res.status(200).render("nosotros");
});
api.get("/contactanos", Joeldev.hosting,(req, res) => {
  res.status(200).render("contactanos");
});
*/
api.get("/", Joeldev.hosting, (req, res) => {
  res.status(200).redirect('/carta');
});

api.get("/carta", Joeldev.hosting,(req, res) => {
  res.status(200).render("carta");
});
api.get("/nosotros", Joeldev.hosting,(req, res) => {
  res.status(200).redirect("/carta");
});
api.get("/contactanos", Joeldev.hosting,(req, res) => {
  res.status(200).redirect("/carta");
});
api.get("/aviso-legal", Joeldev.hosting,(req, res) => {
  res.status(200).render("legalWarning");
});
api.get("/politica-cookies", Joeldev.hosting,(req, res) => {
  res.status(200).render("cookiesPolicy");
});
api.get("/politica-privacidad", Joeldev.hosting,(req, res) => {
  res.status(200).render("privacyPolicy");
});
module.exports = api;