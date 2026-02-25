const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const db = require("./db");

const registerRoute = require("./routes/register");
const paymentRoute = require("./routes/payment");
const contactRoute = require("./routes/contact"); // if you structured this too

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/register", registerRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/contact", contactRoute);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});

module.exports = app;