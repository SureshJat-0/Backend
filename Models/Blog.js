const moongose = require('mongoose');

const BlogSchema = moongose.Schema({
    blogAuthor: {
        type: String,
        require: true,
    },
    blogTitle: {
        type: String,
        require: true,
    },
    blogDescription: {
        type: String,
        require: true
    }
})

const BlogModel = moongose.model('blog', BlogSchema);

module.exports = {
    BlogModel,
}