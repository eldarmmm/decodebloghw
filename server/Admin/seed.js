const User = require('../auth/user')
const bcrypt = require('bcrypt')

async function createAdmin () {
    const findAdmin = await User.find({isAdmin: true}).count()
    if (findAdmin == 0) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash('admin', salt, function(err, hash){
                new User({
                    name: 'Admin',
                    email: 'admin@mail.ru',
                    isAdmin: true,
                    password: hash
                }).save()
            })
        })
    }
}

module.exports = createAdmin