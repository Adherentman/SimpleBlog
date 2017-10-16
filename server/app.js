import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import rewrite from 'express-urlrewrite';
import mongoose from 'mongoose';
import env from './env';



let port = 3333;

var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());

app.get('*', (req, res) => res.sendFile( path.resolve( __dirname, '..', 'build/index.html')));


const db = mongoose.createConnection(env.MongoDbUrl);

db.on('error', function(error){
  console.log(error);
});
db.on('connected', function () {    
  console.log('Mongoose connection open to ' + env.MongoDbUrl);  
});    


app.listen(port);
console.log('Server is running on: https://localhost:%s',port);

module.exports = app;
