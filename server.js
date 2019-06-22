const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const authenticate = require('./server/controller/authenticate');
const blog = require('./server/controller/blog')
require('dotenv').config()

const app = express();


//Database set up 
massive(process.env.CONNECTION_STRING)
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
app.get('/api/test', (req, res, next) =>{
    res.send('This worked!')
})


//Login form 
app.post('/api/login', authenticate.login)
app.post('/api/register', authenticate.register)


//Blog feed
app.get('/api/dashboard', blog.getBlogs)
app.post('/api/dashboard', blog.postBlog)



const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})