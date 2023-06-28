const Register = require("../models/Signup");
const express = require("express");
const router = express.Router();

// Creating New User (Register)

router.post("/register", async (req, res) => {
  try {
    const { username, name, mobile, email, password } = req.body;

    console.log(req.body);

    if (!username || !name || !mobile || !email || !password) {
      return res.status(400).json({
        success: flase,
        msg: "Please Send All Data",
        data: { username, name, mobile, email, password },
      });
    }
    console.log("success");
    const newRegister = new Register({
      username,
      name,
      mobile,
      email,
      password,
    });

    console.log(newRegister);

    await newRegister.save();

    return res.json({
      success: true,
      msg: "user is created",
      data: { username, name, mobile, email, password },
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      success: false,
      msg: `can not create user : ${err.message}`,
      data: {},
    });
  }
});

module.exports = router;
