const express = require('express');
const userModel = require('../model/users')
const app = express();


//http://localhost:3000/users
app.get('/user', async (request, response) => {
    const users = await userModel.find({});
    try {
      response.status(200).send(users);
    } catch (err) {
      response.status(500).send(err);
    }
  });


module.exports = app;