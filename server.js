// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const dbconfig       = require('./config/db');
const test           = require('assert');
const routes         = require('./app/routes');

app.use(bodyParser.urlencoded({ extended: true }));
const port = 8000;

MongoClient.connect(dbconfig.url, {useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)


    const db = client.db('presentation-db');
    routes(app, db);

    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })