module.exports = (app) => {
	const ContactsController = {
		index(req, res) {
			const { user } = req.session;
			const { contacts } = user;
			res.render('contacts/index', { user, contacts });
		},
		create(req, res){
			const { contact } = req.body;
			const { user } = req.session;
			user.contacts.push(contact);
			res.redirect('/contacts');
		},
		show(req,res){
			const { id } = req.params;
			const { user } = req.session;
			const contact = user.contacts[id];
			res.render('contacts/show', {id, contact });
		},
		edit(req, res){
			const { id } = req.params;
			const { user } = req.session;
			const contact = user.contacts[id];
			res.render('contacts/edit', {id, contact, user});
		},
		update(req,res){
			const { contact } = req.body;
			const { user } = req.session;
			user.contacts[req.params.id] = contact;
			res.redirect('/contacts');
		},
		destroy(req,res){
			const { id } = req.params;
			const { user } = req.session;
			user.contacts.splice(id,1);
			res.redirect('/contacts');
		}
	};
	return ContactsController;
}