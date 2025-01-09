const { getUser } = require('../Services/auth');

function restrictToLogedinUserOnly(req, res, next) {
    const id = req.cookies?.id;
    if (!id) return res.redirect('/login');
    const user = getUser(id);
    if (!user) return res.redirect('/login');

    req.user = user;
    next();

}

function checkAuth(req, res, next) {
    const id = req.cookies?.id;
    const user = getUser(id);
    req.user = user;
    next();
}

module.exports = { 
    restrictToLogedinUserOnly,
    checkAuth,
};