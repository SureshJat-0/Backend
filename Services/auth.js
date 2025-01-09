const jwt = require('jsonwebtoken');
const secret = "Suresh@#$";

function setUser(user) {
    return jwt.sign({
        userName: user.userName,
        email: user.email,
        password: user.password
    }, secret);
}

function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}