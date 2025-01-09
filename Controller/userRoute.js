const express = require('express');
const UserRouter = express.Router();
const { HandleSignupPost, HandleLoginPost } = require('../Router/UserHandler');

UserRouter.use(express.urlencoded({extended: true}));


UserRouter.post('/', HandleSignupPost);
UserRouter.post('/login', HandleLoginPost);

module.exports = {
    UserRouter
}