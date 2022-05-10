require("dotenv").config();

// Import express
const express = require("express");

// Import cors
const cors = require("cors");

// We store all express methods in a variable called app
const app = express();

// const corsOptions = {
//   origin: "http://localhost:3000/map",
// };
app.use(cors());

const port = process.env.PORT ?? 5000;

// We call the middleware json
app.use(express.json());

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

app.get("/api/favourite-locations", (request, response) => {
  connection.query("SELECT * FROM favourite_locations", (err, result) => {
    if (err) {
      console.error(err);
      response.status(500).send("Error retrieving data from database");
    } else {
      response.status(200).json(result);
    }
  });
});

app.get("/api/favourite-locations/:locationId", (request, response) => {
  const { locationId } = request.params;
  connection.query(
    "SELECT * FROM favourite_locations WHERE location_id = ?",
    [locationId],
    (err, result) => {
      if (err) {
        console.error(err);
        response.status(500).send("Error retrieving data from database");
      } else if (result.length === 0) {
        response.status(404).send(`No location with id ${locationId}`);
      } else {
        response.status(200).json(result[0]);
      }
    }
  );
});

app.post("/api/favourite-locations", (request, response) => {
  const { locationId, favourite } = request.body;
  connection.query(
    "INSERT INTO favourite_locations (location_id, favourite) VALUES (?, ?)",
    [locationId, favourite],
    (err, result) => {
      if (err) {
        console.error(err);
        response
          .status(500)
          .send("Error adding the location to your favourites");
      } else {
        const id = result.insertId;
        const createdLocation = { id, locationId, favourite };
        response.status(201).send(createdLocation);
      }
    }
  );
});

app.delete("/api/favourite-locations/:locationId", (request, response) => {
  const { locationId } = request.params;
  connection.query(
    "DELETE FROM favourite_locations WHERE location_id = ?",
    [locationId],
    (err, result) => {
      if (err) {
        console.error(err);
        response
          .status(500)
          .send("Error removing the location from your favourites");
      } else if (result.affectedRows === 0) {
        response.status(404).send(`Location with id ${locationId} not found`);
      } else {
        response.sendStatus(204);
      }
    }
  );
});
