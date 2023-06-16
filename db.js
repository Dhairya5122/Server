const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
mongoose
  .connect("mongodb://sql300.infinityfree.com/if0_34389616_jsfashion")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("CAN NOT CONNECT TO MONGO", err);
  });
