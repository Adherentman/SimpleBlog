import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import rewrite from 'express-urlrewrite';


var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());

app.get('*', (req, res) => res.sendFile( path.resolve( __dirname, '..', 'build/index.html')))

app.listen(3333, function(){
    console.log('server running at 3333');
});

module.exports = app;
