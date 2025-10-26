const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const categoryRoute = require("./routes/categoryRoute");
const expenseRoute = require("./routes/expenseRoute");

dotenv.config();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);
app.use(express.json({ limit: "100mb", extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB not connected " + err);
  });

app.use("/api/categories", categoryRoute);
app.use("/api/expenses", expenseRoute);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
