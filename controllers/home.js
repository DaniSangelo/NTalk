module.exports = (app) => {
	const HomeController = {
		index(req, res) {
			res.render('home/index'); /* view */
		},
		login(req, res) {
			const { user } = req.body;
			const { email, name } = user;
			if (email && name){
				user.contacts = [];
				req.session.user = user;
				res.redirect('/contacts');
			}else {
				res.redirect('/');
			}
		},
		logout(req, res) {
			req.session.destroy();
			res.redirect('/');
		}
	};
	return HomeController;
}