const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/decode_blog_hw').then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.log('Failed to connect to MongoDB');
})