const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5174";

const app = express();

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('', routes);

module.exports = app;