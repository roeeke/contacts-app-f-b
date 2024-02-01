const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);

module.exports = app;
