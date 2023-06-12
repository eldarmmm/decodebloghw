const mongoose = require('mongoose')

const CategorieSchema = new mongoose.Schema({
    name: String,
    key: Number,
})

module.exports = mongoose.model("categories", CategorieSchema)