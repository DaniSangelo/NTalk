module.exports = (app) => {
	const ContactsController = {
		index(req, res) {
			const { user } = req.session;
			res.render('contacts/index', { user });
		},
	};
	return ContactsController;
}