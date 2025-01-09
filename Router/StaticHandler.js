const { BlogModel } = require('../Models/Blog');
const path = require('path');

async function GetAllBlogs(req, res) {
    if (!req.user) return res.redirect('/login');
    const allBlogs = await BlogModel.find();
    res.render("Home.ejs", { allBlogs: allBlogs });
}

function GetPostBlogPage(req, res) {
    res.render(path.join(__dirname, "BlogPost.ejs"));
}

function GetSignupPage(req, res) {
    res.render(path.join(__dirname, 'signup.ejs'));
}

function GetLoginPage(req, res) {
    res.render(path.join(__dirname, 'login.ejs'));
}

async function GetProfileBlogs(req, res) {
    if (!req.user) return res.redirect('/login');
    const userBlogs = await BlogModel.find({ blogAuthor: req.user.userName });
    res.render("profileBlogs.ejs", { userBlogs: userBlogs });
}

async function GetBlogInDetails(req, res) {
    const id = req.params.id;
    const blog = await BlogModel.findById(id);
    res.render(path.join(__dirname, "blogDetails.ejs"), { blog });
}


module.exports = {
    GetAllBlogs,
    GetPostBlogPage,
    GetSignupPage,
    GetLoginPage,
    GetProfileBlogs,
    GetBlogInDetails,
}