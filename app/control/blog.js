var Blog = require('../models/blog');


exports.detail = function(req,res){
   var id = req.params.id;
   Blog.findById(id,function(err,blog){
       res.render('detail',{
           title:blog.title,
           blog:blog
       })
   })
}

//admin page
exports.blog = function(req,res){
    res.render('admin',{
            title:'blog 后台录入页',
            blog:{
                title:'',
                content:''
            }
        })
}

//admin post blog
exports.save = function(req,res){
    var id = req.body.blog._id;
        var blogObj = req.body.blog;
        var _blog = null;

        if(id != 'undefined'){
            Blog.findById(id,function(err,blog){
                if(err){
                    console.log(err);
                }
                _blog = _.extend(blog,blogObj);
                _blog.save(function(err,blog){
                    if(err){
                        console.log(err);
                    }

                    res.redirect('/blog/'+blog._id);
                })

            })
        }else{

            _blog = new Blog({
                 title:blogObj.title,
                 content:blogObj.content
             })

             _blog.save(function(err,blog){
                if(err){
                    console.log(err);
                }

                 res.redirect('/blog/'+blog._id);
             })
        }
}





