const express = require('express');
const passport = require('passport')
const router = express.Router();
const {signIn, logIn, logOut} = require('./controller');
const createAdmin = require('../Admin/seed')

router.post('/api/signin', signIn)
router.post('/api/login', passport.authenticate('local', {failureRedirect : '/login?error=1'}), logIn)
router.get('/api/logout', logOut)
createAdmin()

module.exports = router;