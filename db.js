const { default: mongoose } = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/jsfashion")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("CAN NOT CONNECT TO MONGO", err);
  });
