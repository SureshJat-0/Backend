const { BlogModel } = require('../Models/Blog');

async function GetAllBlogs(req, res) {
    if (!req.user) return res.redirect('/login');
    const allBlogs = await BlogModel.find();
    res.render("Home.ejs", {allBlogs: allBlogs});
}

function GetPostBlogPage(req, res) {
    res.render("BlogPost.ejs");
}

function GetSignupPage(req, res) {
    res.render('signup.ejs');
}

function GetLoginPage(req, res) {
    res.render('login.ejs');
}

async function GetProfileBlogs(req, res) {
    if (!req.user) return res.redirect('/login');
    const userBlogs = await BlogModel.find({blogAuthor: req.user.userName});
    res.render("profileBlogs.ejs", {userBlogs: userBlogs});
}

async function GetBlogInDetails(req, res) {
    const id = req.params.id;
    const blog = await BlogModel.findById(id);
    res.render("blogDetails.ejs", {blog});
}


module.exports = {
    GetAllBlogs,
    GetPostBlogPage,
    GetSignupPage,
    GetLoginPage,
    GetProfileBlogs,
    GetBlogInDetails,
}