const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express(); // Our express instance

// express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  // Resolve client build directory as absolute path to avoid errors in express
  const buildPath = path.resolve(__dirname, "../client/build");

  app.use(express.static(buildPath));

  app.get("/", (request, response) => {
    response.sendFile(path.join(buildPath, "index.html"));
  });
}

const users = new Map(); // Storage for the users indexed by id

app.use(bodyParser.json());

app.get("/api/users", (request, response) => {
  response.send(Array.from(users.values()));
});

app.get("/api/users/:id", (request, response) => {
  const userId = parseInt(request.params.id, 10);
  const user = users.get(userId);
  response.send(user);
});

app.put("/api/users/:id", (request, response) => {
  const userId = parseInt(request.params.id, 10);
  const newUser = request.body; // Read the modified film out of the request
  const mergedUser = { ...users.get(userId), ...newUser }; // Merge it with local copy
  users.set(mergedUser.id, mergedUser); // Add the new film back into the collection
  response.send(mergedUser); // Return the new film to the user
});

app.post("/api/users/"),
  (request, response) => {
    const newUser = request.body;
    users.set(newUser.id, newUser);
    response.send(newUser);
  };

module.exports = {
  users,
  app
};
