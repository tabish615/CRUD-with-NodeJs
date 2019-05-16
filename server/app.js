var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');


mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://test:test@ds061325.mlab.com:61325/todo_on_mern')
    .then(() => {
      console.log('Start');
    })
    .catch(err => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });


var itemRouter = require('./src/routes/itemRouter');


app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);


app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});