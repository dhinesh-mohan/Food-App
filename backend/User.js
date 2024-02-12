const express = require("express");
const userSchema = require("./userSchema");
const cardSchema = require("./cardSchema");
const bcrypt = require("bcrypt");
const route = express.Router();

route.post("/register", async (req, res) => {
  try {
    const { name, email, password, location } = req.body;
    let existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userSchema({
      name,
      email,
      password: hashedPassword,
      location,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ success: true, message: "Registration successful" });
  } catch (err) {
    console.error(err);
  }
});

route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordvalid = await bcrypt.compare(password, user.password);

    if (!isPasswordvalid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Password" });
    }
    return res
      .status(200)
      .json({ successful: true, message: "login successfull", user });
  } catch (err) {
    console.log(err);
  }
});

route.get("/cards", async (req, res) => {
  try {
    const cards = await cardSchema.find().limit(10);
    //console.log(cards);
    res.json(cards);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
