const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();

const port = 8000;

let mess = 'We are live on ';

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, client) => {
  if (err) return console.log(err)
  const db = client.db('test')
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log(mess + port);
  });               
});