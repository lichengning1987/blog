var mongoose = require('mongoose');
var BlogSchemas = require('../schemas/blog');
var Blog = mongoose.model('blog',BlogSchemas); //编译生成blog模型 表集合

module.exports = Blog;
