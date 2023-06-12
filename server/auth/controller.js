const User = require('./user')
const bcrypt = require('bcrypt')

const signIn = async(req, res) => {
    if (req.body.email.length <= 0 
        && req.body.name.length <= 0 
        && req.body.password.length <= 0 
        && req.body.repassword.length <= 0) {
        res.redirect('/signin?error=1')
    }else if (req.body.password !== req.body.repassword){
        res.redirect('/signin?error=2')
    }
    const findUser = await User.findOne({email: req.body.email}).count()
    if (findUser) {
        res.redirect('/signin?error=3')
    }

    bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                new User ({
                    email: req.body.email,
                    name: req.body.name,
                    isAdmin: false,
                    password: hash
                }).save()
                res.redirect('/login')
            });
        })
}

const logIn = (req, res) => {
    if(req.user.isAdmin) {
        res.redirect(`/adminprofile/${req.user._id}`)
    } else {
        res.redirect(`/mypage/${req.user._id}`)
}}

const logOut = (req, res) => {
    req.logout(function (err){
        if (err){
            console.log(err);
        }
    })
    res.redirect('/')
}

module.exports = {signIn, logIn, logOut}