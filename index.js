const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const connectMongo = require('./connection');
const cookieParser = require('cookie-parser');

const { HomeRouter } = require('./Controller/staticRoute');
const { UserRouter } = require('./Controller/userRoute');
const { BlogRouter } = require('./Controller/blogRoute');

const { restrictToLogedinUserOnly, checkAuth } = require('./Middlewares/auth');
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views')); // Adjust 'views' if it's in a different directory
app.set('view engine', 'ejs');

app.use('/', checkAuth, HomeRouter);
app.use('/user', checkAuth, UserRouter);
app.use('/blog', restrictToLogedinUserOnly, BlogRouter);


connectMongo('mongodb+srv://sureshjat:Suresh123@myfirstcluster.4uvl1.mongodb.net/blog-app?appName=mongosh+2.3.4').then(() => { console.log('MongoDb Connected') }).catch((err) => { console.log('Mongo err', err) });


app.listen(port, () => {
    console.log('Server Started');
})