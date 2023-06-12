const express = require('express')
const router = express.Router();
const Categories = require('../Blogs/categories')
const User = require('../auth/user')

router.get('/', async(req, res) => {
    const allCategories = await Categories.find()
    res.render('index', {categories: allCategories, user: req.user ? req.user : {}})
})

router.get('/login', (req, res) => {
    res.render('login', {user: req.user ? req.user : {}})
})

router.get('/signin', (req, res) => {
    res.render('signin', {user: req.user ? req.user : {}})
})

router.get('/mypage/:id', async(req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        res.render('mypage', {user: user, loginUser: req.user})
    } else {
        res.redirect('/not-found')
    }
})

router.get('/adminprofile/:id', async(req, res) => {
    const user = await User.findById(req.params.id)
        res.render('adminprofile', {user: user})
})

router.get('/new', async(req, res) => {
    const allCategories = await Categories.find()
    res.render('new', {categories: allCategories,  user: req.user ? req.user : {}})
})

router.get('/post', (req, res) => {
    res.render('post', {user: req.user ? req.user : {}})
})

router.get('/mypagepost', (req, res) => {
    res.render('mypagepost', {user: req.user ? req.user : {}})
})

router.get('/not-found', (req, res) => {
    res.render('notfound', {user: req.user ? req.user : {}})
})

module.exports = router