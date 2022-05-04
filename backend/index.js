require("dotenv").config();

// Import express
const express = require("express");

// Import cors
const cors = require("cors");

// We store all express methods in a variable called app
const app = express();

const corsOptions = {
  origin: "http://localhost:3000/",
};
app.use(cors(corsOptions));

const port = process.env.PORT ?? 5000;

// Create a connection to the database to check if there is any problem
const connection = require("./db-config");

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(
      `Connected to database with threadId :  ${connection.threadId}`
    );
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened...");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/api/favourite-sports", (request, response) => {
  connection.query("SELECT * FROM favourite_sports", (err, result) => {
    if (err) {
      console.error(err);
      response.status(500).send("Error retrieving data from database");
    } else {
      response.status(200).json(result);
    }
  });
});
