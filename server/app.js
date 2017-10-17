import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoFactory from 'mongo-factory';
import rewrite from 'express-urlrewrite';
import env from './env';
import co from 'co';


let port = 3333;

let app = express();


app.use(express.static(path.join(__dirname, '..', 'build')));

app.use(bodyParser.json());

app.get('*', (req, res) => res.sendFile( path.resolve( __dirname, '..', 'build/index.html')));

//mongoose.Promise = global.Promise;
//const db = mongoose.createConnection(env.MongoDbUrl);
mongoFactory.getConnection(env.MongoDbUrl)
.then(function(db) {
  console.log('Mongodb connection open to ' + env.MongoDbUrl);
})
.catch(function(err) {
  console.error(err);
});
/* mongoose增加
var mongooseSchema = new mongoose.Schema({
  username : {type : String, default : '匿名用户'},
  title    : {type : String},
  content  : {type : String},
  time     : {type : Date, default: Date.now},
  age      : {type : Number}
});

mongooseSchema.methods.findbyusername = function(username, callback) {
  return this.model('mongoose').find({username: username}, callback);
}

var mongooseModel = db.model('mongoose', mongooseSchema);

var doc = {username : 'model_demo_username', title : 'hi', content : 'model_demo_content'};
mongooseModel.create(doc, function(error){
    if(error) {
        console.log(error);
    } else {
        console.log('save ok');
    }
});
 */

// db.on('error', function(error){
//   console.log(error);
// });
// db.on('connected', function () {    
//   console.log('Mongoose connection open to ' + env.MongoDbUrl);  
// });    


app.listen(port);
console.log('Server is running on: https://localhost:%s',port);


module.exports = app;
