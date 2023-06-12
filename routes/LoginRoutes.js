const Register = require("../models/Signup");
const express = require("express");
const router = express.Router();

router.get("/login", async (req, res) => {
  try {
    const login = await Register.find();

    res.status(200).json({
      success: true,
      message: "/api/login Request Get",
      data: login,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong on server !!!",
      data: {},
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    // check if the user exists
    const user = await Register.findOne({ email: req.body.email });

    const result = req.body.password === user.password;
    if (!user) {
      res.status(400).json({
        success: false,
        msg: "Please Register your account",
        data: {},
      });
    }
    if (user) {
      //check if password matches
      if (result) {
        console.log("Login Succesful");

        res.status(200).json({
          success: true,
          msg: "Login Successfull",
          data: { user },
        });
      } else {
        res.status(400).json({
          success: false,
          msg: "Email or Password Does not Match",
          data: {},
        });
        console.log("password doesnot match");
      }
    } else {
      res.status(400).json({
        success: false,
        msg: "Please Register your account",
        data: {},
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: "Please Register your account",
      data: {},
    });
  }
});

module.exports = router;
