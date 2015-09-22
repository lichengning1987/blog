var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname,'bower_components')));
app.set('views','./app/views/pages');
app.set('view engine','jade');
app.listen(port);

console.log('lichengning blog '+ port);

//test index
app.get('/',function(req,res){
    res.render('index',{
        title : '博客首页'
    })
})