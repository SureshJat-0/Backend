const express = require('express');
const HomeRouter = express.Router();
const { GetAllBlogs, GetSignupPage, GetLoginPage, GetProfileBlogs } = require('../Router/StaticHandler');

HomeRouter.get('/', GetAllBlogs);
HomeRouter.get('/signup', GetSignupPage);
HomeRouter.get('/login', GetLoginPage);
HomeRouter.get('/profile', GetProfileBlogs);

module.exports = {
    HomeRouter,
}