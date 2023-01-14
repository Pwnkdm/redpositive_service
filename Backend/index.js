const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userController } = require("./Routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userController);

app.listen(process.env.PORT || 8080, async (req, res) => {
  await connection;
  console.log("connected to db");
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
