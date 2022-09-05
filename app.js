const express = require("express");

// Routers
const { registrationsRouter } = require("./routes/registrations.routes");

//  Init our Express app

const app = express();

//  Enable Express app to receive JSON data

app.use(express.json()); //Middleware

//  Define endpoints

app.use("/api/v1/registrations", registrationsRouter);

// Catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url} doesn't exist in our server`,
  });
});

module.exports = { app };
