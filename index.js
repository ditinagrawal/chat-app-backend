// importing required modules
const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const router = require("./routes/routes");
require("dotenv/config");

// initialize express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use(router);

// connect to database and start server
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running : http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
