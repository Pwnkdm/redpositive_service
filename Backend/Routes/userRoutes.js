const express = require("express");
const { userModel } = require("../Models/user.model");

const userController = express.Router();

// route for fetching data
userController.get("/", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

// route for posting data
userController.post("/post", async (req, res) => {
  const { name, no, email, hobbies } = req.body;
  console.log(name, no, email, hobbies);
  const profile = new userModel({
    name,
    no,
    email,
    hobbies,
  });
  profile.save();
  res.send({ message: "Data added sucessfull !" });
});

//route for updating data

//route for deleting data
userController.delete("/delete", async (req, res) => {
  const { id } = req.body;
  const user = await userModel.findOne({ id });
  userModel.filter((el) => el.id !== user.id);
  res.send("Deleted !");
});

module.exports = { userController };
