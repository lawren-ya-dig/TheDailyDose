const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const path = require('path');
const authenticate = require('./server/controller/authenticate');
const blog = require('./server/controller/blog')
require('dotenv').config()

const app = express();


//Database set up 
massive(process.env.DATABASE_URL)
    .then((dbInstance) => {
        app.set('db', dbInstance)
        console.log('db is connected')
    })
    .catch((err) => {
        console.log('db not connected')
    })


app.use(cors())
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.static(path.join(__dirname, '/build')));



//Login form 
app.post('/api/login', authenticate.login)
app.post('/api/register', authenticate.register)


//Blog feed
app.get('/api/dashboard', blog.getBlogs)
app.post('/api/dashboard', blog.postBlog)


//authorizing user
app.get('/auth/user', (req, res, next)=>{
    if(req.session.user){
        res.send({success:true})
    }else{
        res.send({success:false})
    }
})

//check to see if user is still logged in. 
app.use('/api/*', (req, res, next) => {
    if(!req.session.user){
        res.send({success:false, message:'please login'})
    }else{
        next();
    }
})

// //Log out method. 
// app.post('/api/logout', (req, res, next)=>{
//     // this destroys the session and removes the user object.
//     req.session.destroy();
//     res.send({success:true})
// })



app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
    })
});


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})