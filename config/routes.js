
var Index = require('../app/control/index');
var Blog = require('../app/control/blog');

module.exports = function(app){

    app.get('/',Index.index);

    app.get('/blog/:id',Blog.detail);

    app.get('/admin/blog',Blog.blog);

    app.post('/admin/blog/new',Blog.save);
}
