const express = require('express');
const BlogRouter = express.Router();
const { HandlePostBlog } = require('../Router/UserHandler');
const { GetPostBlogPage, GetBlogInDetails } = require('../Router/StaticHandler');

BlogRouter.use(express.urlencoded({ extended: true }));

BlogRouter.post('/', HandlePostBlog);
BlogRouter.get('/', GetPostBlogPage);
BlogRouter.get('/:id', GetBlogInDetails);

module.exports = {
    BlogRouter,
}