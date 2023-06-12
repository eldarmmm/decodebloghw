const express = require('express');
const router = express.Router();
const {upload} = require ('./multer')
const {createPost} = require('./controller')

router.post('/api/new', upload.single('postimg'), createPost)

module.exports = router