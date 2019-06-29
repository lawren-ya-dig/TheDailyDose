module.exports = {
    getBlogs: (req, res, next) => {
		const db = req.app.get('db');
		db.blog_feed.find()
            .then((blogs)=>{
                res.send({success: true, blogs})
            })
            .catch((err)=>{
                res.send({success:false, err})
            })
    },

    postBlog: (req, res, next) => {
		const db = req.app.get('db');
		const newVar = parseInt(req.session.id)
		const blogObject = {
			id: newVar,
			title: req.body.blogObj.title,
			content: req.body.blogObj.content
		};
		db.blog_feed.insert(blogObject)
			.then(newBlog => {
				console.log(newBlog)
				return db.blog_feed({ user_id: req.session.id });
			})
			.then(newFeed => {
				res.send({ success: true, newFeed });
			})
			.catch(err => {
				res.send({ success: false, err });
			});
        }   
    }