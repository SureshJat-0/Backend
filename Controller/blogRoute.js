const express = require('express');
const BlogRouter = express.Router();
const { HandlePostBlog } = require('../Router/UserHandler');
const { GetPostBlogPage, GetBlogInDetails, GetEditBlogPage, HandleEditPostBlog } = require('../Router/StaticHandler');

BlogRouter.use(express.urlencoded({ extended: true }));

BlogRouter.post('/', HandlePostBlog);
BlogRouter.get('/', GetPostBlogPage);
BlogRouter.get('/:id', GetBlogInDetails);
BlogRouter.get('/edit/:id', GetEditBlogPage);
BlogRouter.post('/edit/:id', HandleEditPostBlog);

module.exports = {
    BlogRouter,
}