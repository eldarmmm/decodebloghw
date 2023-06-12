const express = require('express');
const router = express.Router();
const {getAllCategories} = require('./controller')

const writeDataCategorie= require('./seed')

router.get('/api/categorie', getAllCategories)

writeDataCategorie();

module.exports = router;