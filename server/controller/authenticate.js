const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    login: (req, res, next) => {

        const db = req.app.get('db')
        const {email, password} = req.body;

        let currentUser = {};

        db.user_table.findOne({email})
            .then((user) => {
                if(user){
                    currentUser = user;

                    return bcrypt.compare(password, user.password)
                }else{
                    throw ("User not found")
                }
            })
            .then((isMatch) => {
                if(isMatch){
                    delete currentUser.password
                    req.session.user = currentUser
                    res.send({success: true, user:currentUser})
                } else {
                    throw("Wrong credentials")
                }
            })
            .catch((err) => {
                res.send({success: false, err})
            })
    },

    register: (req, res, next) => {

        const db = req.app.get('db');

        const {email, password, first_name, last_name} = req.body;
        db.user_table.findOne({email})
            .then((user) => {
                if(user){
                    throw('Sorry this email already exists')
                }else{
                    return bcrypt.hash(password, saltRounds);
                }
            })
            .then((hash) => {
                return db.user_table.insert({email, password:hash, first_name, last_name})
              })
            .then((user)=>{
                delete user.password;
                req.session.user = user;
                res.send({success: true, user})
            })
            .catch((err)=>{
                res.send({success:false, err})
            })
    }
    
}