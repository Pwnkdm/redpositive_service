const express = require("express");
const { userModel } = require("../Models/user.model");

const userController = express.Router();

// route for fetching data
userController.get("/", async (req, res) => {
  const users = await userModel.find();
  res.send({ profiles: users });
});

// route for posting data
userController.post("/", async (req, res) => {
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
userController.patch("/", async (req, res) => {
  const { id } = req.headers;
  const { name, email, no, hobbies } = req.body;
  await userModel.findByIdAndUpdate(id, { name, email, no, hobbies });
  res.send("Updated !");
});

//route for deleting data
userController.delete("/", async (req, res) => {
  const { id } = req.headers;
  const user = await userModel.findOne({ id });
  await userModel.deleteOne({ id });
  res.send("Deleted !");
});

module.exports = { userController };
