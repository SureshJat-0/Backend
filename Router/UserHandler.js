const { BlogModel } = require('../Models/Blog');
const { UserModel } = require('../Models/user');
const { setUser } = require('../Services/auth');

async function HandlePostBlog(req, res) {
    const body = req.body;
    await BlogModel.create({
        blogAuthor: req.user.userName,
        blogTitle: body.blogTitle,
        blogDescription: body.blogDescription
    });
    res.redirect('/');
}

async function HandleSignupPost(req, res) {
    const body = req.body;
    await UserModel.create({
        userName: body.userName,
        email: body.email,
        password: body.password
    });
    res.redirect('/login');
}

async function HandleLoginPost(req, res) {
    const body = req.body;
    const user = await UserModel.findOne({ email: body.email, password: body.password });
    if (!user) return res.redirect('/login');

    const token = setUser(user);
    res.cookie('id', token);

    res.redirect('/');
}

module.exports = {
    HandlePostBlog,
    HandleSignupPost,
    HandleLoginPost,
}