const { users, app } = require("./routes");
const fs = require("fs");
const path = require("path");
const util = require("util");

const readFile = util.promisify(fs.readFile);

readFile(path.join(__dirname, "users.json"))
  .then(contents => {
    const arr = JSON.parse(contents);

    arr.forEach(function(user) {
      users.set(user.id, user);
    });
    console.log(users);
    // Start the server
    const server = app.listen(process.env.PORT || 3001);
    console.log("Listening on port %d", server.address().port);
  })
  .catch(err => {
    console.error(err);
  });
