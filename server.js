const express = require("express");
const app = express();
const server = require('http').createServer(app);
const users = [];

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/users/login/", (req, res) => {
  if(req.query.login && req.query.password) {
    users.forEach(user => {
      if(user.login === req.query.login && user.password === req.query.password){
        res.send(true);
        return;
      }
    });
  }
  res.send(false);
});
app.get("/users/registration/", (req, res) => {
  if(req.query.login && req.query.password) {
    users.push({login: req.query.login, password: req.query.password});
    res.send(true);
    return;
  }
  res.send(false);
});

server.listen(3001, () => console.log(`App is running`));