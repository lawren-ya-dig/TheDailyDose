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
		const blogObject = {
			user_id: req.session.user.id,
			title: req.body.blog.title,
			content: req.body.blog.content
		};
		db.blog_feed.find()
			.insert(blogObject)
			.then(newBlog => {
				return db.blog_feed({ user_id: req.session.user.id });
			})
			.then(newFeed => {
				res.send({ success: true, newFeed });
			})
			.catch(err => {
				res.send({ success: false, err });
			});
        }   
    }