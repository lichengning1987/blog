var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
var _ = require('underscore');
var Blog = require('./app/models/blog');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newblog');

app.use(require('body-parser').urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'bower_components')));
app.set('views','./app/views/pages');
app.set('view engine','jade');
app.listen(port);

console.log('lichengning blog '+ port);

require('./config/routes')(app)



