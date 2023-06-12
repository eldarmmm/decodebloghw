const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    posttitle: String,
    postcategory: {type: mongoose.Schema.Types.ObjectId, ref: 'categories'},
    postimg: String,
    postbody: String,
    author: {type: mongoose.Schema.Types.ObjectId , ref: 'user'} 
})

module.exports = mongoose.model("posts", PostSchema)