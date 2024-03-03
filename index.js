const express = require("express");
require("dotenv").config();
const connectDB = require("./database/db.js");
const cors = require("cors");
const authRoutes = require("./Routes/authRoutes.js");

const app = express();

//to connect with db
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
