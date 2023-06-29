const mongoose = require("mongoose");

// const express = require("express");
// const { default: mongoose } = require("mongoose");
// const app = express();
// mongoose
//   .connect("mongodb://127.0.0.1:27017/jsfashion")
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((err) => {
//     console.log("CAN NOT CONNECT TO MONGO", err);
//   });

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://dhairya5122:dhairya@jsfashion.hwyj7ck.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

async function run() {
  try {
    await mongoose.connect(
      "mongodb+srv://dhairya5122:dhairya@jsfashion.hwyj7ck.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (err) {
    throw Error("CONNECTION ERROR");
  }
}

module.exports = { run };

// run().catch(console.dir);
