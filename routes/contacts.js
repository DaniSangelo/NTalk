const authenticate = require('../middlewares/authenticator');
module.exports = (app) => {
	const { contacts } = app.controllers;
	app.get('/contacts', authenticate, contacts.index);
	app.get('/contacts/:id', authenticate, contacts.show);
	app.post('/contacts', authenticate, contacts.create);
	app.get('/contacts/:id/edit', authenticate, contacts.edit);
	app.put('/contacts/:id', authenticate, contacts.update);
	app.delete('/contacts/:id', authenticate, contacts.destroy);
}