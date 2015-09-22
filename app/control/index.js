var Blog = require('../models/blog');

exports.index = function(req,res){
    Blog.fetch(function(err,blogs){
       if(err){
           console.log(err)
       }
       res.render('index',{
           title:'首页',
           blogs:blogs
       })
    })
}
