const Post = require('./post')
const User = require('../auth/user')


const createPost = async(req, res) => {
    if (req.file &&
        req.body.posttitle.length > 1 &&
        req.body.postcategory.length > 0 &&
        req.body.postbody.length > 2) {
          await new Post({ 
            posttitle: req.body.posttitle,
            postcategory: req.body.postcategory,
            postimg: `/images/posts/${req.file.filename}`,
            postbody: req.body.postbody,
            author: req.user._id
        }).save()
        res.redirect(`/adminprofile/${req.user._id}`)
    } else {
        res.redirect('/new?error=1')
        } 
}


module.exports = {createPost}